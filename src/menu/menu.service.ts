import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kitchen } from './interfaces/Kitchen.interface';
import { KitchenInput } from './inputs/kitchen.input';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Kitchen') private readonly kitchenModel: Model<Kitchen>,
  ) {}

  async createKitchen(kitchen: KitchenInput): Promise<Kitchen> {
    const kitchenDocument = new this.kitchenModel({
      ...kitchen,
      createdAt: new Date(),
    });
    return kitchenDocument.save();
  }

  async findKitchenById(id: string): Promise<Kitchen> {
    return this.kitchenModel.findOne({ _id: id });
  }

  async findAllKitchens(): Promise<Kitchen[]> {
    return this.kitchenModel.find().exec();
  }

  async updateKitchen(kitchen: KitchenInput): Promise<Kitchen> {
    await this.kitchenModel
      .updateOne(
        {
          _id: kitchen.id,
        },
        {
          $set: { ...kitchen },
        },
      )
      .exec();
    return this.kitchenModel.findById(kitchen.id).exec();
  }
  async removeKitchen(id: String):Promise<boolean> {
    const record = await this.kitchenModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return record.n === 1 ;
  }
}
