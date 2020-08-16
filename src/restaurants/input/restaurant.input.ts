import { Field, ID, InputType, Float } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class RestaurantInput {
    @Field(() => ID, { nullable: true })
    readonly id?: string;
    @Field({nullable: true})
    readonly name: string;
    @Field({nullable: true})
    readonly website: string;
    @Field({nullable: true})
    readonly phone: string;
    @Field({nullable: true})
    readonly postCode: string;
    @Field({nullable: true})
    readonly email: string;
    @Field({nullable: true})
    readonly address: string;
    @Field({nullable: true})
    readonly city: string;
    @Field({nullable: true})
    readonly estimatedTime: string;
    @Field({nullable: true})
    readonly about: string;
    @Field({nullable: true})
    readonly delivery: boolean;
    @Field({nullable: true})
    readonly pickUp: boolean;
    @Field({nullable: true})
    readonly dineIn: boolean;
    @Field(() => Float,{nullable: true})
    readonly commission: number;
    @Field(() => GraphQLUpload, {nullable: true})
    readonly image?: Upload;
    @Field({nullable: true})
    readonly imagePath?: string;
    @Field({nullable: true})
    readonly status: boolean;
}