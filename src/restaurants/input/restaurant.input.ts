import { Field, ID, InputType } from '@nestjs/graphql';
import { Upload } from 'src/shared/upload';
import { GraphQLUpload } from 'graphql-upload';

@InputType()
export class RestaurantInput {
    @Field(() => ID, { nullable: true })
    readonly id?: string;
    @Field()
    readonly name: string;
    @Field()
    readonly website: string;
    @Field()
    readonly phone: string;
    @Field()
    readonly postCode: string;
    @Field()
    readonly email: string;
    @Field()
    readonly address: string;
    @Field()
    readonly city: string;
    @Field()
    readonly estimatedTime: string;
    @Field()
    readonly about: string;
    @Field()
    readonly delivery: boolean;
    @Field()
    readonly pickUp: boolean;
    @Field()
    readonly dineIn: boolean;
    @Field()
    readonly commission: number;
    @Field(() => GraphQLUpload, {nullable: true})
    readonly image?: Upload;
    @Field({nullable: true})
    readonly imagePath?: string;
    @Field({nullable: true})
     status: boolean;
}