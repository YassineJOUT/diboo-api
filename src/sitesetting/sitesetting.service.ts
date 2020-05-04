import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from './interface/site.interface';
import { SiteInput } from './input/site.input';
import { Commission } from './interface/commission.interface';
import { CommissionInput } from './input/commission.input';

@Injectable()
export class SitesettingService {
    constructor(
        @InjectModel('Site') private readonly siteModel: Model<Site>,
        @InjectModel('Commission') private readonly comModel: Model<Commission>
      ) {}
    
      async create(site: SiteInput): Promise<Site> {
        const adminDocument = new this.siteModel(site);
        return adminDocument.save();
      }
    
      async update(site: SiteInput): Promise<Site> {
        await this.siteModel
          .updateOne(
            {
              _id: site.id,
            },
            {
              $set: { ...site },
            },
          )
          .exec();
        return this.siteModel.findById(site.id).exec();
      }
    
      async findAll(): Promise<Site[]> {
        return this.siteModel.find().exec();
      }

      async createCommission(com: CommissionInput): Promise<Commission> {
        const adminDocument = new this.comModel(com);
        return adminDocument.save();
      }
    
      async updateCommission(com: CommissionInput): Promise<Commission> {
        await this.comModel
          .updateOne(
            {
              _id: com.id,
            },
            {
              $set: { ...com },
            },
          )
          .exec();
        return this.comModel.findById(com.id).exec();
      }
    
      async getCommission(): Promise<Commission[]> {
        return this.comModel.find().exec();
      }

      
    
}
