import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class SiteType {

  @Field(() => ID, { nullable: true })
  readonly id?: string;
  @Field({ nullable: true })
  readonly adminName: string;
  @Field({ nullable: true })
  readonly adminEmail: string;
  @Field({ nullable: true })
  readonly supportEmail: string;
  @Field({ nullable: true })
  readonly sitePhone: string;
  @Field({ nullable: true })
  readonly siteName: string;
  @Field({ nullable: true })
  readonly siteLogo: string;
  @Field({ nullable: true })
  readonly siteFavIcon: string;
  @Field({ nullable: true })
  readonly adminPage: string;
  @Field({ nullable: true })
  readonly userPage: string;
  @Field({ nullable: true })
  readonly offlineStatus: boolean;
  @Field({ nullable: true })
  readonly offlineNote: string;
  @Field({ nullable: true })
 // readonly //currencyImage: Photo,
  readonly currencySymbol: string;
  @Field({ nullable: true })
 // readonly //siteAddress: Address,
  readonly headerText: string;
  @Field({ nullable: true })
  readonly googleAnalyticCode: string;
  @Field({ nullable: true })
  readonly siteMetaTagTitle: string;
  @Field({ nullable: true })
  readonly siteMetaTagKeyword: string;
  @Field({ nullable: true })
  readonly siteMetaTagDescription: string;
  @Field({ nullable: true })
  readonly facebook: string;
  @Field({ nullable: true })
  readonly twitter: string;
  @Field({ nullable: true })
  readonly linkedin: string;
  @Field({ nullable: true })
  readonly youtube: string;
  @Field({ nullable: true })
  readonly instagram: string;
  
}
