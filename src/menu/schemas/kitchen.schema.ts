import * as mongoose from 'mongoose';

export const KitchenSchema = new mongoose.Schema({
  title: String,
  kitchenName: {
    type: String,
    default: '',
  },
  imagePath: String,
  popular: {
    type: Boolean,
    default: false,
  },
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
