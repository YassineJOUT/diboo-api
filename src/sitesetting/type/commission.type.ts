import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class CommissionType {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field(() => Float,{ nullable: true })
  readonly commission: number;
}