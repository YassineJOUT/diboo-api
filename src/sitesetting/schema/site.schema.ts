import * as  mongoose from "mongoose";


export const SiteSchema = new mongoose.Schema({
    adminName: String,
    adminEmail: String,
    supportEmail: String,
    sitePhone: String,
    siteName: String,
    siteLogo: String,
    siteFavIcon: String,
    adminPage: String,
    userPage: String,
    offlineStatus: Boolean,
    offlineNote: String,
    //currencyImage: Photo,
    currencySymbol: String,
    //siteAddress: Address,
    headerText: String,
    googleAnalyticCode: String,
    siteMetaTagTitle: String,
    siteMetaTagKeyword: String,
    siteMetaTagDescription: String,
    facebook: String,
    twitter: String,
    linkedin: String,
    youtube: String,
    instagram: String,
});
