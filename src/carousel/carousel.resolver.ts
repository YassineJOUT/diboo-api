import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarouselService } from './carousel.service';
import { CarouselType } from './type/carousel.type';
import { CarouselInput } from './input/carousel.input';
import { createWriteStream } from 'fs';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CarouselResponseType } from './type/carousel-resp.type';

@Resolver()
export class CarouselResolver {
  constructor(private readonly carouselService: CarouselService) {}

  @Query(() => CarouselType)
  @UseGuards(GqlAuthGuard)
  async getOneCarousel(@Args('id') id: string) {
    return this.carouselService.findOneById(id);
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
    try {
      if (input.image !== null) {
        
        const imagePromesse = await new Promise(async (resolve, reject) =>{
        const { createReadStream, filename } = await input.image;
          return await createReadStream()
            .pipe(
              createWriteStream(
                __dirname +
                  `/../../images/${"testtest-test"}.${filename.substr(
                    filename.lastIndexOf('.') + 1,
                  )}`,
              ),
            )
            .on('finish', () => resolve(true))
            .on('error', () => reject(false))
        });
        return {
          ok: true,
          
        };
     
      }
    } catch (err) {
      return {
        ok: false,
        error: 'Something went wrong while inserting',
      };
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async addCarouselPhoto(
    @Args('input') input: CarouselInput,
  ): Promise<boolean> {
    const car = await this.carouselService.findOneById(input.id);
    const carUpdated = await this.carouselService.update(input);
    console.log(input.image);
    const { createReadStream, filename } = await input.image;
    if (!car) throw Error('Carousel not found');
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(
          createWriteStream(
            __dirname +
              `/../../images/${input.id}.${filename.substr(
                filename.lastIndexOf('.') + 1,
              )}`,
          ),
        )
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteCarousel(@Args('id') id: String) {
    return this.carouselService.remove(id);
  }
}
