import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "src/dto/create-cat.dto";
import { CatInput } from "src/inputs/cat.input";


@Resolver()
export class catsResolver{
    constructor(private readonly catsService: CatsService){
    }

    @Query(() => String)
    async Hello(){
        return 'Hello Yassine';
    }

    @Query(() => [CreateCatDto])
    async cats(){
        return this.catsService.findAll();
    }

    @Mutation(() => CreateCatDto)
    async createCat(@Args('input') input: CatInput){
        return this.catsService.create(input);
    }

}