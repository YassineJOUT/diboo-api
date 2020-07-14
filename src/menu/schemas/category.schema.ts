import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  title: String,
  categoryName: {
    type: String,
    default: '',
  },
  imagePath: String,
  status: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});
