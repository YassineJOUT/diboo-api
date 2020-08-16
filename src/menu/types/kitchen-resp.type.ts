import { ObjectType, Field } from '@nestjs/graphql';
import { KitchenType } from './kitchen.type';

@ObjectType()
export class KitchenResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> [KitchenType],{ nullable: true })
  readonly data: [KitchenType];
}
