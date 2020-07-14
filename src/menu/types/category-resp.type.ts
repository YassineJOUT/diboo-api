import { ObjectType, Field } from '@nestjs/graphql';
import { CategoryType } from './category.type';

@ObjectType()
export class CategoryResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> [CategoryType],{ nullable: true })
  readonly data: [CategoryType];
}
