import { Module } from '@nestjs/common';
import { CarouselResolver } from './carousel.resolver';
import { CarouselService } from './carousel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarouselSchema } from './schema/admin.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Carousel', schema: CarouselSchema }])],
  providers: [CarouselResolver, CarouselService]
})
export class CarouselModule {}
