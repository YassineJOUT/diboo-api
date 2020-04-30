import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AdminInput {
  
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
