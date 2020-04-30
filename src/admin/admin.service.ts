import { Injectable } from '@nestjs/common';
import { Admin } from './interface/admin.interface';
import { AdminType } from './type/admin.type';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminSchema } from './schema/admin.schema';
import { AdminInput } from './input/admin.input';

@Injectable()
export class AdminService {

    
    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin> ){};

    async create(admin: AdminInput): Promise<Admin> {
      const createdCat = new this.adminModel(admin);
      return createdCat.save();
    }
  
    async findAll(): Promise<Admin[]> {
        const t =  this.adminModel.find().exec();
        console.log(await t);
      return t;
    }
}
