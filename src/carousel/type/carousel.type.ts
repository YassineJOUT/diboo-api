import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CarouselType {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly title: string;
  @Field({ nullable: true })
  readonly subtitle: string;
  @Field({ nullable: true })
  readonly status: boolean;
  @Field({ nullable: true })
  readonly bannerLink: string;
  @Field({ nullable: true })
  readonly createdAt: Date;
  @Field({ nullable: true })
  readonly imagePath: string;
}
