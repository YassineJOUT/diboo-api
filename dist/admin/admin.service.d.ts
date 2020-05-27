import { Admin } from './interface/admin.interface';
import { Model } from 'mongoose';
import { AdminInput } from './input/admin.input';
export declare class AdminService {
    private readonly adminModel;
    constructor(adminModel: Model<Admin>);
    create(admin: AdminInput): Promise<Admin>;
    update(admin: AdminInput): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    remove(id: String): Promise<boolean>;
    findOne(email: string): Promise<Admin>;
    findOneById(id: string): Promise<Admin>;
}
