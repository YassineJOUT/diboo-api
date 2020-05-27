import { AdminService } from 'src/admin/admin.service';
import { AdminType } from 'src/admin/type/admin.type';
export declare class AuthService {
    private readonly admin;
    constructor(admin: AdminService);
    validate({ id }: {
        id: any;
    }): Promise<AdminType>;
}
