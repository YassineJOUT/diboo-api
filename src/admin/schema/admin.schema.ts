import { Schema } from 'mongoose';

export const AdminSchema = new Schema({
  username: String,
  password: String,
  //image: String,
  //image: Photo,
  rememeberMe: String,
  //role: Role,
});
