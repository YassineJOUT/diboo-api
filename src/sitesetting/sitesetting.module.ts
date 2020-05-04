import { Module } from '@nestjs/common';
import { SitesettingService } from './sitesetting.service';
import { SitesettingResolver } from './sitesetting.resolver';
import { SiteSchema } from './schema/site.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Site', schema: SiteSchema }])],
    providers: [ SitesettingResolver, SitesettingService]
})
export class SitesettingModule {}
