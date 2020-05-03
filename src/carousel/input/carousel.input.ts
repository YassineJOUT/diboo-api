import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CarouselInput {
  @Field(() => ID, { nullable: true })
   id?: string;
  @Field()
  readonly title: string;
  @Field()
  readonly subtitle: string;
  @Field()
  readonly status: boolean;
  @Field()
  readonly bannerLink: string;
}
