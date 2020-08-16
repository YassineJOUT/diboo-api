import { ObjectType, Field } from '@nestjs/graphql';
import { CommissionType } from './commission.type';

@ObjectType()
export class CommissionResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> CommissionType,{ nullable: true })
  readonly data: CommissionType;
}
