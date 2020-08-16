import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarouselService } from './carousel.service';
import { CarouselInput } from './input/carousel.input';
import { createWriteStream } from 'fs';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CarouselResponseType } from './type/carousel-resp.type';
import * as moment from 'moment';
import { ERROR_FETCHING, ERROR_INSERTING } from 'src/shared/Consts';
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
        error: ERROR_FETCHING,
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
        error: ERROR_FETCHING,
      };
    }
  }

  @Mutation(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async createCarousel(@Args('input') input: CarouselInput) {
    console.log('inpuyt');
    console.log(input);
    try {
      if (input.image) {
        const imagePromesse = await new Promise(async (resolve, reject) => {
          const { createReadStream, filename } = await input.image;
          const imagename = `img-${moment().format(
            'MM-DD-YYYY-h:mm:ss',
          )}.${filename.substr(filename.lastIndexOf('.') + 1)}`;
          return await createReadStream()
            .pipe(createWriteStream(__dirname + '/../../images/' + imagename))
            .on('finish', async () => {
              const { image, ...result } = input;
              if (input.id)
                await this.carouselService.update({
                  ...result,
                  imagePath: imagename,
                });
              else
                this.carouselService.create({
                  ...result,
                  imagePath: imagename,
                });
              return resolve(true);
            })
            .on('error', () => reject(false));
        });

        if (imagePromesse) return { ok: true, message: 'Carousel updated!' };
        else return { ok: false, error: ERROR_INSERTING };
      } else {
        const { image, ...result } = input;
        if (input.id) {
          await this.carouselService.update({ ...result });
          return {
            ok: true,
            message: 'Carousel updated!',
          };
        } else {
          await this.carouselService.create({ ...result, imagePath: '' });
          return {
            ok: true,
            message: 'Carousel Added!',
          };
        }
      }
    } catch (err) {
      return {
        ok: false,
        error: ERROR_INSERTING,
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

  @Mutation(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async editStatusCarousel(@Args('input') input: CarouselInput) {
    const carUpdated = await this.carouselService.update({
      id: input.id,
      status: input.status,
    });
    if (!carUpdated)
      return {
        ok: false,
        error: 'Could not update carousel status',
      };
    return {
      ok: true,
      message: 'Carousel status updated',
    };
  }
  @Mutation(() => CarouselResponseType)
  @UseGuards(GqlAuthGuard)
  async deleteCarousel(@Args('id') id: String) {
    const res = await this.carouselService.remove(id);
    if (res)
      return {
        ok: res,
        message: 'Carousel deleted!',
      };
    return {
      ok: res,
      error: 'Could not delete carouselå!',
    };
  }
}
