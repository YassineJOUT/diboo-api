import * as  mongoose from "mongoose";


export const CustomerSchema = new mongoose.Schema({
     name: String,
     phone: String,
     email: String,

});