import * as  mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  totalPrice: Number,
  paymentMethod: String,
  date: Date,
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
});