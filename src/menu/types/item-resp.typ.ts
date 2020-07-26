import { ObjectType, Field } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { ItemType } from './item.type';

@ObjectType()
export class ItemResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> [ItemType],{ nullable: true })
  readonly data: [ItemType];
}
