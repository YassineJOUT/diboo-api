import { ObjectType, Field } from '@nestjs/graphql';
import { OrderType } from './order.type';

@ObjectType()
export class OrderResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field(()=> [OrderType],{ nullable: true })
  readonly data: [OrderType];
}
