import { Field, ID, InputType } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class CarouselInput {
  @Field( { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly title?: string;
  @Field({ nullable: true })
  readonly subtitle?: string;
  @Field({ nullable: true })
  readonly status?: boolean;
  @Field({ nullable: true })
  readonly bannerLink?: string;
  @Field(() => GraphQLUpload, {nullable: true})
  readonly image?: Upload;
  @Field({nullable: true})
  readonly imagePath?: string;
}
