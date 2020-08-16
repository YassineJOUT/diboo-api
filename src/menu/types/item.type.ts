import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';
import { CategoryType } from './category.type';

@ObjectType()
export class ItemType {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly itemName?: string;
  @Field({ nullable: true })
  readonly status?: boolean;
  @Field({ nullable: true })
  readonly instruction?: boolean;
  @Field({ nullable: true })
  @Field({ nullable: true })
  readonly popular?: boolean;
  @Field({ nullable: true })
  readonly description?: string;
  @Field(() => Float, { nullable: true })
  readonly price: Number;
  @Field({nullable: true})
  readonly imagePath?: string;
  @Field({nullable: true})
  readonly createdAt?: Date;
  @Field({nullable: true})
  readonly category?: string;
}