import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
     name: String,
     phone: String,
     email: String,
     addedDate: Date,
     status: Boolean!,
     restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
     },
     orders: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Order',
          },
        ],
});