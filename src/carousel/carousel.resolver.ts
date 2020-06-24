import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarouselService } from './carousel.service';
import { CarouselType } from './type/carousel.type';
import { CarouselInput } from './input/carousel.input';
import { createWriteStream } from 'fs';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CarouselResponseType } from './type/carousel-resp.type';
import * as moment from 'moment';
@Resolver()
export class CarouselResolver {
  constructor(private readonly carouselService: CarouselService) {}

  @Query(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async getOneCarousel(@Args('id') id: string) {
    try {
      const res = await this.carouselService.findOneById(id);
      return {
        ok: true,
        data: [res],
      };
    } catch (err) {
      return {
        ok: false,
        error: 'Something went wrong while fetching',
      };
    }
  }

  @Query(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async getCarousels() {
    try {
      const res = this.carouselService.findAll();
      return {
        ok: true,
        data: res,
      };
    } catch (err) {
      return {
        ok: false,
        error: 'Something went wrong while fetching',
      };
    }
  }

  @Mutation(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async createCarousel(@Args('input') input: CarouselInput) {
    console.log('carousel creation');
    try {
      if (input.image !== null) {
        const imagePromesse = await new Promise(async (resolve, reject) => {
          const { createReadStream, filename } = await input.image;
          const imagename = `img-${moment().format(
            'MM-DD-YYYY-h:mm:ss',
          )}.${filename.substr(filename.lastIndexOf('.') + 1)}`;
          return await createReadStream()
            .pipe(createWriteStream(__dirname + '/../../images/' + imagename))
            .on('finish', () => {
              const { image, ...result } = input;
              this.carouselService.create({ ...result, imagePath: imagename });
              return resolve(true);
            })
            .on('error', () => reject(false));
        });

        if (imagePromesse) return { ok: true };
        else return { ok: false };
      }
    } catch (err) {
      return {
        ok: false,
        error: 'Something went wrong while inserting',
      };
    }
  }

  @Mutation(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async addCarouselPhoto(@Args('input') input: CarouselInput): Promise<any> {
    //find the carousel to modify
    const car = await this.carouselService.findOneById(input.id);
    if (!car) throw Error('Carousel not found');
    // handle image upload
    const { createReadStream, filename } = await input.image;
    const imgPromise = await new Promise(async (resolve, reject) => {
      try {
        const res = createReadStream()
          .pipe(
            createWriteStream(
              __dirname +
                `/../../images/${input.id}.${filename.substr(
                  filename.lastIndexOf('.') + 1,
                )}`,
            ),
          )
          .on('finish', () => resolve(true))
          .on('error', () => reject(false));
        return res;
      } catch (err) {
        reject(false);
      }
    });
    // if upload success
    if (imgPromise) {
      const carUpdated = await this.carouselService.update(input);
      if (!carUpdated)
        return {
          ok: false,
        };
      return {
        ok: true,
      };
    }
    return {
      ok: false,
    };
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteCarousel(@Args('id') id: String) {
    return this.carouselService.remove(id);
  }
}
