//import * as  mongoose from "mongoose";
import { Schema } from 'mongoose';

export const RestaurantSchema = new Schema({
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
     customers: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
          },
        ],
});