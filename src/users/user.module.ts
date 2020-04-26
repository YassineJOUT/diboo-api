import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersResolver,UsersService],
})
export class UserModule {}
