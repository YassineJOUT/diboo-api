import { UsersService } from "./users.service";
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    sayHello(): string;
}
