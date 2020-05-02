import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminType } from './type/admin.type';
import { AdminInput } from './input/admin.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class AdminResolver {
    
    constructor(private readonly adminService: AdminService) {}
  
    @UseGuards(AuthGuard('local'))
    @Mutation(() => AdminType)
    async login(@Args('login') adminInput: AdminInput){
        return adminInput;
    }

    @Query(() => AdminType)
    async getOne(@Args('email') email: string){
        
        return this.adminService.findOne(email);
    }

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
