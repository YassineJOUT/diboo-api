import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './interface/restaurant.interface';
import { RestaurantInput } from './input/restaurant.input';

@Injectable()
export class RestaurantService {
 constructor(
        @InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>,
      ) {} 
 async create(restaurant: RestaurantInput): Promise<Restaurant> {
    const adminDocument = new this.restaurantModel(restaurant);
    if(adminDocument.status == null ) adminDocument.status = true;
    return adminDocument.save();
  }

  async findOneById(id: string): Promise<Restaurant> {
    return this.restaurantModel.findOne({ _id: id });
  }

  async findAll(): Promise<Restaurant[]> {
    return  this.restaurantModel.find()
    .populate('customers')
    .exec();
  }

  async remove(id: String):Promise<boolean> {
    const record = await this.restaurantModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return record.n === 1 ;
  }

  async update(restaurant: RestaurantInput): Promise<Restaurant> {
    await this.restaurantModel
      .updateOne(
        {
          _id: restaurant.id,
        },
        {
          $set: { ...restaurant },
        },
      )
      .exec();
    return this.restaurantModel.findById(restaurant.id).exec();
  }

  async updateStatus(id: String, status: boolean): Promise<Restaurant> {
    await this.restaurantModel
      .updateOne(
        {
          _id: id,
        },
        {
        "status" : status,
        },
      )
      .exec();
    return this.restaurantModel.findById(id).exec();
  }
}
