import { Document } from 'mongoose';

export interface Restaurant extends Document {
    readonly id: string;
    readonly name: string;
    readonly website: string;
    readonly phone: string;
    readonly postCode: string;
    readonly email: string;
    readonly address: string;
    readonly city: string;
    readonly estimatedTime: string;
    readonly about: string;
    readonly delivery: boolean;
    readonly pickUp: boolean;
    readonly dineIn: boolean;
    readonly commission: number;
    readonly imagePath: string;
    status: boolean;
}
