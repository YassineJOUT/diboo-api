import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Upload } from 'src/shared/upload';

@ObjectType()
export class RestaurantType {

  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly website: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly postCode: string;
  @Field()
  readonly email: string;
  @Field()
  readonly address: string;
  @Field()
  readonly city: string;
  @Field()
  readonly estimatedTime: string;
  @Field()
  readonly about: string;
  @Field()
  readonly delivery: boolean;
  @Field()
  readonly pickUp: boolean;
  @Field()
  readonly dineIn: boolean;
  @Field()
  readonly commission: string;
  @Field(() => GraphQLUpload, {nullable: true})
  readonly image?: Upload;
  @Field({nullable: true})
  readonly imagePath?: string;
  @Field({nullable: true})
   status?: boolean;
}
