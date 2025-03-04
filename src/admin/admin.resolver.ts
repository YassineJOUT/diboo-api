import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminType } from './type/admin.type';
import { AdminInput } from './input/admin.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';

@Resolver()
export class AdminResolver {

    constructor(private readonly adminService: AdminService) {}

    @Query(() => AdminType)
    
    async getOne(@Args('email') email: string){
        
        return this.adminService.findOne(email);
    }

    @Query(() => [AdminType])
    @UseGuards(GqlAuthGuard)
    async getAll(){
        return this.adminService.findAll();
    }

    @Mutation(() => AdminType)
    @UseGuards(GqlAuthGuard)
    async createAdmin(@Args('input') input: AdminInput){
        return this.adminService.create(input);
    }

    @Mutation(() => AdminType)
    @UseGuards(GqlAuthGuard)
    async updateAdmin(@Args('input') input: AdminInput){
        return this.adminService.update(input);
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async deleteAdmin(@Args('id') id: String){
        return this.adminService.remove(id);
    }
}
