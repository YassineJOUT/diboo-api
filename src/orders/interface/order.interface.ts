import { Document } from 'mongoose';

export interface Order extends Document {
    readonly id: string;
    readonly totalPrice: number;
    readonly paymentMethod: string;
    readonly date: Date;  
    readonly customer: string
}
