import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site } from './interface/site.interface';
import { SiteInput } from './input/site.input';

@Injectable()
export class SitesettingService {
    constructor(
        @InjectModel('Site') private readonly siteModel: Model<Site>,
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
    
}
