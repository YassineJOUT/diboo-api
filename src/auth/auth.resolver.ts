import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlRes } from '../shared/decorators/decorators';
import { JwtService } from '@nestjs/jwt';
//import { SignUpInputDto } from './sign-up-input.dto';
import { LoginInput } from './login.input';
import { AdminService } from 'src/admin/admin.service';
import { AdminType } from 'src/admin/type/admin.type';
import { AdminInput } from 'src/admin/input/admin.input';


@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly admin: AdminService,
  ) {}

  @Mutation(() => AdminType)
  async login(
    @Args('loginInput') { email, password }: LoginInput,
    @GqlRes() res: Response,
  ) {
      console.log('res')
      console.log(res)
    
    const user = await this.admin.findOne(email);
    if (!user) {
      throw Error('Email or password incorrect');
    }
    
    const pwd = await bcryptjs.hash(password, 10);

    console.log(pwd);

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });
    console.log(jwt);
    return user;
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