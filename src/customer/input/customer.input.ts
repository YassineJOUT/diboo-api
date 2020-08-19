import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
    @Field(() => ID, { nullable: true })
    readonly id?: string;
    @Field()
    readonly name: string;
    @Field()
    readonly phone: string;
    @Field()
    readonly email: string;
    @Field()
    readonly addedDate: Date;
    @Field({nullable: true})
     status: boolean;
    @Field(() => ID,{nullable: true})
    readonly restaurant: string;
}