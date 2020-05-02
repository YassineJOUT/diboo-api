import { Injectable } from '@nestjs/common';
import { Admin } from './interface/admin.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminInput } from './input/admin.input';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async create(admin: AdminInput): Promise<Admin> {
    const adminDocument = new this.adminModel(admin);
    return adminDocument.save();
  }

  async update(admin: AdminInput): Promise<Admin> {
    
    await this.adminModel
      .updateOne(
        {
          _id: admin.id,
        },
        {
          $set: { ...admin },
        },
      )
      .exec();
    return this.adminModel.findById(admin.id).exec();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async remove(id: String) {
    const record = await this.adminModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return record.n === 1 ? 'Success' : 'Error';
  }

  async findOne(email: string) {
    // const t =  this.adminModel.findOne({$or: [
    //     {email: username},
    //     {username: username}
    // ]}).exec();
    // 
    return this.adminModel.findOne({email});
  }
}
