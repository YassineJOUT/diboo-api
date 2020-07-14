import { Document } from 'mongoose';

export interface Category extends Document {
  readonly id: string;
  readonly categoryName: string;
  readonly description: string;
  readonly imagePath: string;
  readonly status: boolean;
  readonly createdAt: Date;
}
