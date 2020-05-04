import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GqlRes, GqlUser } from '../shared/decorators/decorators';
import { JwtService } from '@nestjs/jwt';
//import { SignUpInputDto } from './sign-up-input.dto';
import { LoginInput } from './login.input';
import { AdminService } from 'src/admin/admin.service';
import { AdminType } from 'src/admin/type/admin.type';
import { AdminInput } from 'src/admin/input/admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './graphql-auth.guard';


@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly admin: AdminService,
  ) {}

  @Mutation(() => AdminType)
  async login(
    @Args('input') input: LoginInput,
    @GqlRes() res: Response,
  ) {
      
    
    const user = await this.admin.findOne(input.email);
    if (!user) {
      throw Error('Email or password incorrect');
    }
    
    const valid = await bcryptjs.compare(input.password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });
    console.log('jwt');
    console.log(jwt);
    return user;
  }

  @Query(returns => AdminType)
@UseGuards(GqlAuthGuard)
whoAmI(@GqlUser() user: AdminType) {
  return this.admin.findOneById(user.id);
}

  @Mutation(() => AdminType)
  async signup(
    @Args('signUpInput') adminInput: AdminInput,
    @GqlRes() res: Response,
  ) {
    const emailExists = await this.admin.findOne(
        adminInput.email
    );
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const password = await bcryptjs.hash(adminInput.password, 10);

    const user = await this.admin.create({ ...adminInput, password });

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }
}