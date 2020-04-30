import { Document } from 'mongoose';

export interface Admin extends Document {
    readonly username: string,
    readonly password: string,
    //image: String,
    //image: Photo,
    readonly rememeberMe: string,
    //role: Role,
}