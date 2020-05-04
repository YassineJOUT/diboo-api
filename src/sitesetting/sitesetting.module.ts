import { Module } from '@nestjs/common';
import { SitesettingService } from './sitesetting.service';
import { SitesettingResolver } from './sitesetting.resolver';
import { SiteSchema } from './schema/site.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommissionSchema } from './schema/commission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Site', schema: SiteSchema }]),
    MongooseModule.forFeature([{ name: 'Commission', schema: CommissionSchema }]),
  ],

  providers: [SitesettingResolver, SitesettingService],
})
export class SitesettingModule {}
