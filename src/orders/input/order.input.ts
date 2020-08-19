import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class OrderInput {
    @Field(() => ID, { nullable: true })
    readonly id?: string;
    @Field()
    readonly totalPrice: number;
    @Field()
    readonly paymentMethod: string;
    @Field()
    readonly date: Date;  
    @Field(() => ID,{nullable: true})
    readonly customer: string;
}