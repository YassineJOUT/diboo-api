import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResponseType } from './types/order-resp.type';
import { OrderInput }  from './input/order.input';
import { CustomerResolver} from '../customer/customer.resolver' ;
@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService,
              ) {}

  @Query(() => OrderResponseType)
  @UseGuards(GqlAuthGuard)
  async getOrders() {
    let customerResolver: CustomerResolver  ;
    try { let res = null ;
      const orders = this.orderService.findAll();
      for (let [key, value] of Object.entries(orders)) {
       //res =  customerResolver.getOneCustomer(value.customerId);
       res = value.customerId ;
      }
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

  @Mutation(() => OrderResponseType)
    @UseGuards(GqlAuthGuard)
    async createOrder(@Args('input') input: OrderInput){
        console.log('Order creation');
        const returnTest = this.orderService.create(input);
        if(returnTest) return {
          ok: true,
        }
        else return {
          ok: false,
          error: "Rest creation failed: error while creating Order"
        }
    }
}
