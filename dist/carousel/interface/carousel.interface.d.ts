import { Document } from 'mongoose';
export interface Carousel extends Document {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string;
    readonly status: boolean;
    readonly bannerLink: string;
    readonly createdAt: Date;
}
