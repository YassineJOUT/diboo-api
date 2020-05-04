import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/admin/schema/admin.schema';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Admin',
        schema: AdminSchema,
      },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'dibooSecret',
      signOptions: {
        expiresIn: '3600s',
      },
    }),
  ],
  providers: [
    AdminService,
    AuthService,
    JwtStrategy,
    AuthResolver,
  ],
  exports: [AuthService],
})
export class AuthModule {}
