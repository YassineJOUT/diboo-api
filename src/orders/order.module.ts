import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderSchema } from './schema/order.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
  providers: [OrderResolver, OrderService],
  exports: [OrderService]
})
export class OrderModule {}