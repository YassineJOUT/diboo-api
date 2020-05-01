import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AdminType {
  @Field(() => ID,{ nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly username?: string;
  @Field({ nullable: true })
  readonly password?: string;
  
  //image: String;
  //image: Photo;
  @Field({ nullable: true })
  readonly rememeberMe?: string;
  //role: Role;
}
