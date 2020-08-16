import * as  mongoose from "mongoose";


export const RestaurantSchema = new mongoose.Schema({
     name: String,
     website: String,
     phone: String,
     postCode: String,
     email: String,
     address: String,
     city: String,
     estimatedTime: String,
     about: String,
     delivery: Boolean,
     pickUp: Boolean,
     dineIn: Boolean,
     commission: Number,
     imagePath: String!,
     status: Boolean!,

});