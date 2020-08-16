import { Document } from 'mongoose';

export interface Item extends Document {
    readonly id: string;
    readonly itemName: string;
    readonly description: string;
    readonly imagePath: string;
    readonly status: boolean;
    readonly instruction: boolean;
    readonly popular: boolean;
    readonly price: Number;
    readonly createdAt: Date;
    readonly category: string;
  }
  