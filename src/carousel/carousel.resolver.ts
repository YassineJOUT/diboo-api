import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CarouselService } from './carousel.service';
import { CarouselType } from './type/carousel.type';
import { CarouselInput } from './input/carousel.input';
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { Upload } from '../shared/upload';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';

@Resolver()
export class CarouselResolver {
  constructor(private readonly carouselService: CarouselService) {}

  @Query(() => CarouselType)
  @UseGuards(GqlAuthGuard)
  async getOneCarousel(@Args('id') id: string) {
    return this.carouselService.findOneById(id);
  }

  @Mutation(() => CarouselType)
  @UseGuards(GqlAuthGuard)
  async createCarousel(@Args('input') input: CarouselInput) {
    return this.carouselService.create(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async addCarouselPhoto(
    @Args('input') input: CarouselInput,
  ): Promise<boolean> {
    const car = await this.carouselService.findOneById(input.id);
    const carUpdated = await this.carouselService.update(input);
    console.log(input.photo);
    const { createReadStream, filename } = await input.photo;
    if (!car) throw Error('Carousel not found');
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `/../../images/${input.id}.${filename.substr(filename.lastIndexOf('.') + 1)}`))
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
