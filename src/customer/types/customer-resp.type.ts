import { ObjectType, Field } from '@nestjs/graphql';
import { CustomerType } from './customer.type';

@ObjectType()
export class CustomerResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field(()=> [CustomerType],{ nullable: true })
  readonly data: [CustomerType];
}
