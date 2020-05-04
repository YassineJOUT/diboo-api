import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { mongooseModule } from './config/db';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CarouselModule } from './carousel/carousel.module';
import { SitesettingResolver } from './sitesetting/sitesetting.resolver';
import { SitesettingService } from './sitesetting/sitesetting.service';
import { SitesettingModule } from './sitesetting/sitesetting.module';

@Module({
  imports: [
    AdminModule,
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql',
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      }
    }),
    mongooseModule,
    AuthModule,
    CarouselModule,
    SitesettingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
