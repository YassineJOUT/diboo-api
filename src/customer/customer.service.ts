import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
 constructor(
        @InjectModel('Customer') private readonly customerModel: Model<Customer>,
      ) {} 

  async findAll(): Promise<Customer[]> {
    return  this.customerModel.find().exec();
  }

}