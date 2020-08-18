import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerResponseType } from './types/customer-resp.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CustomerService } from './customer.service';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => CustomerResponseType)
  @UseGuards(GqlAuthGuard)
  async getCustomers() {
    try {
      const res = this.customerService.findAll();
      return {
        ok: true,
        data: res,
      };
    } catch (err) {
      return {
        ok: false,
        error: 'Something went wrong while fetching',
      };
    }
  }
}