import * as  mongoose from "mongoose";


export const AdminSchema = new mongoose.Schema({
  
  username: String,
  password: String,
  //image: String,
  //image: Photo,
  rememeberMe: String,
  //role: Role,
});
