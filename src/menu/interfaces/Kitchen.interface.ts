import { Document } from 'mongoose';

export interface Kitchen extends Document {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly status: boolean;
  readonly bannerLink: string;
  readonly createdAt: Date;
}
