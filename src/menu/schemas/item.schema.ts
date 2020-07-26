import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  itemName: {
    type: String,
    default: '',
  },
  imagePath: String,
  status: {
    type: Boolean,
    default: false,
  },
  instruction: {
    type: Boolean,
    default: false,
  },
  popular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});
