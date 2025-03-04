import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SitesettingService } from './sitesetting.service';
import { SiteType } from './type/site.type';
import { SiteInput } from './input/site.input';
import { CommissionInput } from './input/commission.input';
import { CommissionType } from './type/commission.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CommissionResponseType } from './type/commission-resp.type';
import { SiteSettingResponseType } from './type/stitesetting-resp.type';

@Resolver('Sitesetting')
export class SitesettingResolver {
  constructor(private readonly sitesettings: SitesettingService) {}

  @Query(() => SiteSettingResponseType)
  @UseGuards(GqlAuthGuard)
  async getSetting() {
    const res = await this.sitesettings.getSetting();
   // console.log(res);
    if (res.length === 0)
      return {
        ok: false,
        error: 'no commission found',
      };
    return {
      ok: true,
      data: res[0],
    };
  }

  @Mutation(() => SiteType)
  @UseGuards(GqlAuthGuard)
  async createSiteSettings(@Args('input') input: SiteInput) {
    return this.sitesettings.create(input);
  }

  @Mutation(() => SiteSettingResponseType)
  @UseGuards(GqlAuthGuard)
  async updateSiteSetting(@Args('input') input: SiteInput) {
    let res = null;
    if(input.id && input.id !== "")
         res = await this.sitesettings.update(input);
    else
     res = await this.sitesettings.create(input);
    if (res)
      return {
        ok: true,
        message: 'Site settings Updated!',
      };
      return {
        ok: false,
        error: 'Could not update site setting',
      };
  }

  @Query(() => CommissionResponseType)
  @UseGuards(GqlAuthGuard)
  async getCommission() {
    const res = await this.sitesettings.getCommission();
    if (res.length === 0)
      return {
        ok: false,
        error: 'no commission found',
      };
    return {
      ok: true,
      data: res[0],
    };
  }

  @Mutation(() => CommissionType)
  @UseGuards(GqlAuthGuard)
  async createCommission(@Args('input') input: CommissionInput) {
    return this.sitesettings.createCommission(input);
  }

  @Mutation(() => CommissionResponseType)
  @UseGuards(GqlAuthGuard)
  async updateCommission(@Args('input') input: CommissionInput) {
    let res = null;
    if(input.id && input.id !== "")
         res = await this.sitesettings.updateCommission(input);
    else
     res = await this.sitesettings.createCommission(input);
    if (res)
      return {
        ok: true,
        message: 'Commission Updated!',
      };
      return {
        ok: false,
        error: 'Could not update Commission',
      };
  }
}
