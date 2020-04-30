import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
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
