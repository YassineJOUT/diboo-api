import { Document } from 'mongoose';

export interface Admin extends Document {
    readonly id: string,
    readonly username: string,
    readonly email: string,
    readonly password: string,
    //image: String,
    //image: Photo,
    //readonly rememeberMe: string,
    //role: Role,
}