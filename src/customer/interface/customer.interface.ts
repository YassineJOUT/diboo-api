import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly email: string;
    readonly addedDate: Date;
    status: boolean;
    readonly restaurant: string;
    readonly orders: [string];
}
