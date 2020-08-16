import { Field, ID, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CommissionInput {
  @Field(() => ID, { nullable: true })
  readonly id?: String;
  @Field(() => Float, { nullable: true })
  readonly commission: Number;
}