"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.SiteSchema = new mongoose.Schema({
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
    currencySymbol: String,
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
//# sourceMappingURL=site.schema.js.map