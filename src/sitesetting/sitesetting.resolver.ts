import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitesettingService } from './sitesetting.service';
import { SiteType } from './type/site.type';
import { SiteInput } from './input/site.input';

@Resolver('Sitesetting')
export class SitesettingResolver {

    constructor(private readonly sitesettings: SitesettingService) {}

    @Query(() => [SiteType])
    async getAllSettings(){
        return this.sitesettings.findAll();
    }

    @Mutation(() => SiteType)
    async createSiteSettings(@Args('input') input: SiteInput){
        return this.sitesettings.create(input);
    }

    @Mutation(() => SiteType)
    async updateSiteSettings(@Args('input') input: SiteInput){
        return this.sitesettings.update(input);
    }
}
