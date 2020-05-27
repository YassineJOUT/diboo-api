import { Document } from 'mongoose';
export interface Admin extends Document {
    readonly id: string;
    readonly email: string;
    readonly password: string;
}
