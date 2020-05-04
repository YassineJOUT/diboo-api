import { Field, ID, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CommissionInput {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field(() => Float)
  readonly commission: number;
}