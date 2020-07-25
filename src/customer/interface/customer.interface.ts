import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly email: string;
}
