import { AdminService } from './admin.service';
import { AdminInput } from './input/admin.input';
export declare class AdminResolver {
    private readonly adminService;
    constructor(adminService: AdminService);
    getOne(email: string): Promise<import("./interface/admin.interface").Admin>;
    getAll(): Promise<import("./interface/admin.interface").Admin[]>;
    createAdmin(input: AdminInput): Promise<import("./interface/admin.interface").Admin>;
    updateAdmin(input: AdminInput): Promise<import("./interface/admin.interface").Admin>;
    deleteAdmin(id: String): Promise<boolean>;
}
