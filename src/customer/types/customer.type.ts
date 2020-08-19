import { ObjectType, Field, ID } from '@nestjs/graphql';
import { OrderType } from '../../orders/types/order.type';

@ObjectType()
export class CustomerType {

  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly email: string;
  @Field()
  readonly addedDate: Date;
  @Field({nullable: true})
  status?: boolean;
  @Field({nullable: true})
  readonly restaurant: string;
  @Field(() => [OrderType],{nullable: true})
  readonly orders?: [OrderType];
}
