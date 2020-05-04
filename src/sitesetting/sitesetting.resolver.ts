import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitesettingService } from './sitesetting.service';
import { SiteType } from './type/site.type';
import { SiteInput } from './input/site.input';
import { CommissionInput } from './input/commission.input';
import { CommissionType } from './type/commission.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';

@Resolver('Sitesetting')
export class SitesettingResolver {

    constructor(private readonly sitesettings: SitesettingService) {}

    @Query(() => [SiteType])
    @UseGuards(GqlAuthGuard)
    async getAllSettings(){
        return this.sitesettings.findAll();
    }

    @Mutation(() => SiteType)
    @UseGuards(GqlAuthGuard)
    async createSiteSettings(@Args('input') input: SiteInput){
        return this.sitesettings.create(input);
    }

    @Mutation(() => SiteType)
    @UseGuards(GqlAuthGuard)
    async updateSiteSettings(@Args('input') input: SiteInput){
        return this.sitesettings.update(input);
    }

    @Query(() => [CommissionType])
    @UseGuards(GqlAuthGuard)
    async getCommission(){
        return this.sitesettings.getCommission();
    }

    @Mutation(() => CommissionType)
    @UseGuards(GqlAuthGuard)
    async createCommission(@Args('input') input: CommissionInput){
        return this.sitesettings.createCommission(input);
    }

    @Mutation(() => CommissionType)
    @UseGuards(GqlAuthGuard)
    async updateCommission(@Args('input') input: CommissionInput){
        return this.sitesettings.updateCommission(input);
    }
}
