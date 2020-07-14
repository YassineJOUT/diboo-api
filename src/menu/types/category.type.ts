import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';

@ObjectType()
export class CategoryType {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly categoryName?: string;
  @Field({ nullable: true })
  readonly status?: boolean;
  @Field({ nullable: true })
  readonly description?: string;
  @Field(() => GraphQLUpload, {nullable: true})
  readonly image?: Upload;
  @Field({nullable: true})
  readonly imagePath?: string;
  @Field({nullable: true})
  readonly createdAt?: Date;
}