import { Resolver, Query, Int, Args, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "./user.model";
import { UsersService } from "./users.service";
import { UserInput } from "src/inputs/user.input";


@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,

  ) {}

  @Query(returns => String)
   sayHello(): string{
    return this.usersService.sayHello();

}

 /* @Query(returns => User)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  @Mutation(returns => User)
  async createUser(@Args('user') user: UserInput){
      
      this.usersService.create(user);

  }*/
}