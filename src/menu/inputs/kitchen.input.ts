import { Field, InputType } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class KitchenInput {
  @Field( { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly kitchenName?: string;
  @Field({ nullable: true })
  readonly status?: boolean;
  @Field({ nullable: true })
  readonly popular?: boolean;
  @Field({ nullable: true })
  readonly description?: string;
  @Field(() => GraphQLUpload, {nullable: true})
  readonly image?: Upload;
  @Field({nullable: true})
  readonly imagePath?: string;
}
