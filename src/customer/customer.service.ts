import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
 constructor(
        @InjectModel('Customer') private readonly restaurantModel: Model<Customer>,
      ) {} 

  async findAll(): Promise<Customer[]> {
    return  this.restaurantModel.find().exec();
  }

}