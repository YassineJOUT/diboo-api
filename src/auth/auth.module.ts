import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from 'src/admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [AdminModule, PassportModule],
  providers: [AuthService, LocalStrategy, AuthResolver],
  
})

export class AuthModule {}
