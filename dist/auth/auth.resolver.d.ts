import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './login.input';
import { AdminService } from 'src/admin/admin.service';
import { AdminType } from 'src/admin/type/admin.type';
import { AdminInput } from 'src/admin/input/admin.input';
export declare class AuthResolver {
    private readonly jwt;
    private readonly admin;
    constructor(jwt: JwtService, admin: AdminService);
    login(input: LoginInput, res: Response): Promise<{
        ok: boolean;
        error: string;
        data?: undefined;
    } | {
        ok: boolean;
        data: import("../admin/interface/admin.interface").Admin;
        error?: undefined;
    }>;
    whoAmI(user: AdminType): Promise<import("../admin/interface/admin.interface").Admin>;
    signup(adminInput: AdminInput, res: Response): Promise<import("../admin/interface/admin.interface").Admin>;
}
