import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResponseType } from './types/customer-resp.type';
import { CustomerInput }  from './input/customer.input';

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

  @Mutation(() => CustomerResponseType)
    @UseGuards(GqlAuthGuard)
    async createCustomer(@Args('input') input: CustomerInput){
        console.log('Customer creation');
        const returnTest = this.customerService.create(input);
        if(returnTest) return {
          ok: true,
        }
        else return {
          ok: false,
          error: "Rest creation failed: error while creating Customer"
        }
    }
  
    @Query(() => CustomerResponseType)
    @UseGuards(GqlAuthGuard)
    async getOneCustomer(@Args('id') id: string) {
      try {
        const res = await this.customerService.findOneById(id);
        return {
          ok: true,
          data: [res],
        };
      } catch (err) {
        return {
          ok: false,
          error: 'Something went wrong while fetching',
        };
      }
    }
}
