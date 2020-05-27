import { Document } from 'mongoose';
export interface Site extends Document {
    readonly id: string;
    readonly adminName: String;
    readonly adminEmail: String;
    readonly supportEmail: String;
    readonly sitePhone: String;
    readonly siteName: String;
    readonly siteLogo: String;
    readonly siteFavIcon: String;
    readonly adminPage: String;
    readonly userPage: String;
    readonly offlineStatus: Boolean;
    readonly offlineNote: String;
    readonly currencySymbol: String;
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
}
