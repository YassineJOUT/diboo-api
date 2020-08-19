import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interface/customer.interface';
import { CustomerInput }  from './input/customer.input';

@Injectable()
export class CustomerService {
 constructor(
        @InjectModel('Customer') private readonly customerModel: Model<Customer>,
      ) {} 

  async findAll(): Promise<Customer[]> {
    return  this.customerModel.find()
    .populate('orders')
    .exec();
  }
  async create(customer: CustomerInput): Promise<Customer> {
    const temp = new this.customerModel(customer);
    if(temp.status == null ) temp.status = true;
    return temp.save();
  }
  async findOneById(id: string): Promise<Customer> {
    return this.customerModel.findOne({ _id: id });
  }
}
