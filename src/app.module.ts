import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { mongooseModule } from './config/db';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CarouselModule } from './carousel/carousel.module';
import { SitesettingModule } from './sitesetting/sitesetting.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RestaurantModule } from './restaurants/restaurant.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './orders/order.module';
@Module({
  imports: [
    AdminModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    GraphQLModule.forRoot({
      cors:false,
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
    SitesettingModule,
    RestaurantModule,
    CustomerModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
