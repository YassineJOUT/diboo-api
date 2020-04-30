import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { mongooseModule } from './config/db';

@Module({
  imports: [
    mongooseModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
