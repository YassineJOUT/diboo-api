import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { mongooseModule } from './config/db';
import { AdminResolver } from './admin/admin.resolver';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    mongooseModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    UsersModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService, AdminResolver, AdminService],
})
export class AppModule {}
