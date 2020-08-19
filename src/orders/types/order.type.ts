import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Upload } from 'src/shared/upload';

@ObjectType()
export class OrderType {
    @Field(() => ID, { nullable: true })
    readonly id?: string;
    @Field()
    readonly totalPrice: number;
    @Field()
    readonly paymentMethod: string;
    @Field()
    readonly date: Date;  
    @Field({nullable: true})
    readonly customer: string;
}
