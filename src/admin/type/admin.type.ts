import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AdminType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
  @Field()
  //image: String;
  //image: Photo;
  @Field()
  readonly rememeberMe: string;
  //role: Role;
}
