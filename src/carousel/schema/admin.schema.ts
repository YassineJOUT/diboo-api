import * as  mongoose from "mongoose";


export const CarouselSchema = new mongoose.Schema({
  //id: .
  //image: Photo!,
  title: String!,
  subtitle: String!,
  status: Boolean!,
  bannerLink: String,
  createdAt: Date,
  //CreatedBy: Admin!
});
