import { ObjectType, Field } from '@nestjs/graphql';
import { RestaurantType } from './restaurant.type';

@ObjectType()
export class RestaurantResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field(()=> [RestaurantType],{ nullable: true })
  readonly data: [RestaurantType];
}
