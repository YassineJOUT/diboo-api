import { Document } from 'mongoose';

export interface Commission extends Document {
    readonly id: string,
    readonly commission: Number,
}