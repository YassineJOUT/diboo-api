import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Upload } from 'src/shared/upload';

@ObjectType()
export class CustomerType {

  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly email: string;
 
}
