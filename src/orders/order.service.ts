import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './interface/order.interface';
import { OrderInput }  from './input/order.input';

@Injectable()
export class OrderService {
 constructor(
        @InjectModel('Order') private readonly orderModel: Model<Order>,
      ) {} 

  async findAll(): Promise<Order[]> {
    return  this.orderModel.find().exec();
  }
  async create(order: OrderInput): Promise<Order> {
    const temp = new this.orderModel({... order, date : new Date(),});
    return temp.save();
  }

}
