import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitesettingService } from './sitesetting.service';
import { SiteType } from './type/site.type';
import { SiteInput } from './input/site.input';
import { CommissionInput } from './input/commission.input';
import { CommissionType } from './type/commission.type';

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

    @Query(() => [CommissionType])
    async getCommission(){
        return this.sitesettings.getCommission();
    }

    @Mutation(() => CommissionType)
    async createCommission(@Args('input') input: CommissionInput){
        return this.sitesettings.createCommission(input);
    }

    @Mutation(() => CommissionType)
    async updateCommission(@Args('input') input: CommissionInput){
        return this.sitesettings.updateCommission(input);
    }
}
