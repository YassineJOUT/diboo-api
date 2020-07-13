import { Document } from 'mongoose';

export interface SiteSetting extends Document {
  readonly id: string;
  readonly adminName: String;
  readonly adminEmail: String;
  readonly supportEmail: String;
  readonly invoiceEmail: String;
  readonly sitePhone: String;
  readonly siteName: String;
  readonly siteLogo: String;
  readonly siteFavIcon: String;
  readonly adminPage: String;
  readonly userPage: String;
  readonly offlineStatus: Boolean;
  readonly offlineNote: String;
  // readonly //currencyImage: Photo,
  readonly currencySymbol: String;
  // readonly //siteAddress: Address,
  readonly headerText: String;
  readonly googleAnalyticCode: String;
  readonly siteMetaTagTitle: String;
  readonly siteMetaTagKeyword: String;
  readonly siteMetaTagDescription: String;
  readonly facebook: String;
  readonly twitter: String;
  readonly linkedin: String;
  readonly youtube: String;
  readonly instagram: String;
  readonly tax: Number;
  readonly address: String;
  readonly city: String;
  readonly country: String;
  readonly postCode: String;
}
