import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class SiteInput {
  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field()
  readonly adminName: string;
  @Field()
  readonly adminEmail: string;
  @Field()
  readonly supportEmail: string;
  @Field()
  readonly sitePhone: string;
  @Field()
  readonly siteName: string;
  @Field()
  readonly siteLogo: string;
  @Field()
  readonly siteFavIcon: string;
  @Field()
  readonly adminPage: string;
  @Field()
  readonly userPage: string;
  @Field()
  readonly offlineStatus: boolean;
  @Field()
  readonly offlineNote: string;
  @Field()
 // readonly //currencyImage: Photo,
  readonly currencySymbol: string;
  @Field()
 // readonly //siteAddress: Address,
  readonly headerText: string;
  @Field()
  readonly googleAnalyticCode: string;
  @Field()
  readonly siteMetaTagTitle: string;
  @Field()
  readonly siteMetaTagKeyword: string;
  @Field()
  readonly siteMetaTagDescription: string;
  @Field()
  readonly facebook: string;
  @Field()
  readonly twitter: string;
  @Field()
  readonly linkedin: string;
  @Field()
  readonly youtube: string;
  @Field()
  readonly instagram: string;
}
