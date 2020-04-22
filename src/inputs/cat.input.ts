import {  Field, Int, InputType, ID } from "@nestjs/graphql"



@InputType()
export class CatInput {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}