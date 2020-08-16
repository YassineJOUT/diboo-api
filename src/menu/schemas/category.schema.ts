import { schemaDefinitionNotAloneMessage } from 'graphql/validation/rules/LoneSchemaDefinition';
import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
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
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});
