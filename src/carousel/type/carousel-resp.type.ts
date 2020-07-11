import { ObjectType, Field } from '@nestjs/graphql';
import { CarouselType } from './carousel.type';

@ObjectType()
export class CarouselResponseType{
  @Field({ nullable: true })
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error: string;
  @Field({ nullable: true })
  readonly message: string;
  @Field(()=> [CarouselType],{ nullable: true })
  readonly data: [CarouselType];
}
