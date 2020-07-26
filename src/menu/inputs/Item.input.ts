import { Field, InputType, Float, ID } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';
import { CategoryInput } from './Category.input';

@InputType()
export class ItemInput {
  @Field( { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly itemName?: string;
  @Field({ nullable: true })
  readonly status?: boolean;
  @Field({ nullable: true })
  readonly instruction?: boolean;
  @Field({ nullable: true })
  readonly popular?: boolean;
  @Field({ nullable: true })
  readonly description?: string;
  @Field(() => Float, { nullable: true })
  readonly price: Number;
  @Field(() => GraphQLUpload, {nullable: true})
  readonly image?: Upload;
  @Field({nullable: true})
  readonly imagePath?: string;
  @Field(() => ID,{nullable: true})
  readonly category?: string;
}
