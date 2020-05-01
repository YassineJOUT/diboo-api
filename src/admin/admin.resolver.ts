import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminType } from './type/admin.type';
import { AdminInput } from './input/admin.input';

@Resolver()
export class AdminResolver {

    constructor(private readonly adminService: AdminService) {}
  
    @Query(() => [AdminType])
    async getAll(){
        return this.adminService.findAll();
    }

    @Mutation(() => AdminType)
    async createAdmin(@Args('input') input: AdminInput){
        return this.adminService.create(input);
    }

    @Mutation(() => AdminType)
    async updateAdmin(@Args('input') input: AdminInput){
        return this.adminService.update(input);
    }

    @Mutation(() => String)
    async deleteAdmin(@Args('id') id: String){
        return this.adminService.remove(id);
    }
}
