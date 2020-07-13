import * as mongoose from 'mongoose';

export const SiteSchema = new mongoose.Schema({

  adminName: {
    type: String,
    default: '',
  },
  adminEmail: {
    type: String,
    default: '',
  },
  supportEmail: {
    type: String,
    default: '',
  },
  invoiceEmail: {
    type: String,
    default: '',
  },
  sitePhone: {
    type: String,
    default: '',
  },
  siteName: {
    type: String,
    default: '',
  },
  siteLogo: {
    type: String,
    default: '',
  },
  siteFavIcon: {
    type: String,
    default: '',
  },
  adminPage: {
    type: String,
    default: '',
  },
  userPage: {
    type: String,
    default: '',
  },
  offlineStatus: {
    type: Boolean,
    default: false,
  },
  offlineNote: {
    type: String,
    default: '',
  },
  //  //currencyImage: Photo,
  currencySymbol: {
    type: String,
    default: '',
  },
  //  //siteAddress: Address,
  headerText: {
    type: String,
    default: '',
  },
  googleAnalyticCode: {
    type: String,
    default: '',
  },
  siteMetaTagTitle: {
    type: String,
    default: '',
  },
  siteMetaTagKeyword: {
    type: String,
    default: '',
  },
  siteMetaTagDescription: {
    type: String,
    default: '',
  },
  facebook: {
    type: String,
    default: '',
  },
  twitter: {
    type: String,
    default: '',
  },
  linkedin: {
    type: String,
    default: '',
  },
  youtube: {
    type: String,
    default: '',
  },
  instagram: {
    type: String,
    default: '',
  },
  tax: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  postCode: {
    type: String,
    default: '',
  },
});
