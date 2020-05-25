import * as  mongoose from "mongoose";


export const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  //simage: String,
  //image: Photo,
  //rememeberMe: String,
  //role: Role,
});
