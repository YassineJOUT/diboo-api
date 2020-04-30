import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminType } from './type/admin.type';
import { AdminInput } from './input/admin.input';

@Resolver()
export class AdminResolver {

    constructor(private readonly adminService: AdminService) {}
    
    @Query(() => String)
    async helloAmdin(){
        return "Hello Admin";
    }


    @Query(() => [AdminType])
    async getAll(){
        return this.adminService.findAll();
    }

    @Mutation(() => AdminType)
    async createAdmin(@Args('input') input: AdminInput){
        return this.adminService.create(input);
    }
}
