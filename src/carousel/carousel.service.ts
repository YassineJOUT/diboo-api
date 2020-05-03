import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carousel } from './interface/carousel.interface';
import { CarouselInput } from './input/carousel.input';
import { createTypePredicateNodeWithModifier } from 'typescript';

@Injectable()
export class CarouselService {
  constructor(
    @InjectModel('Carousel') private readonly carouselModel: Model<Carousel>,
  ) {}

  async create(carousel: CarouselInput): Promise<Carousel> {
    const adminDocument = new this.carouselModel({
      ...carousel,
      createdAt: new Date(),
      image: '',
    });
    return adminDocument.save();
  }

  async findOneById(id: string) {
    return this.carouselModel.findOne({ _id: id });
  }

  async update(carousel: CarouselInput): Promise<Carousel> {
    await this.carouselModel
      .updateOne(
        {
          _id: carousel.id,
        },
        {
          $set: { ...carousel },
        },
      )
      .exec();
    return this.carouselModel.findById(carousel.id).exec();
  }

  async updateImage(image: string, id: string): Promise<boolean> {
    await this.carouselModel
      .updateOne(
        {
          _id: id,
        },
        {
          $set: { image },
        },
      )
      .exec();

    return true;
  }

  async remove(id: String):Promise<boolean> {
    const record = await this.carouselModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return record.n === 1 ;
  }
}
