import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { mongooseModule } from './config/db';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CarouselModule } from './carousel/carousel.module';

@Module({
  imports: [
    AdminModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    mongooseModule,
    AuthModule,
    CarouselModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
