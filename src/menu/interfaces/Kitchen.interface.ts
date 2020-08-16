import { Document } from 'mongoose';

export interface Kitchen extends Document {
  readonly id: string;
  readonly kitchenName: string;
  readonly description: string;
  readonly status: boolean;
  readonly popular: boolean;
  readonly imagePath: string;
  readonly createdAt: Date;
}
