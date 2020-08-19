import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerSchema } from './schema/customer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
  providers: [CustomerResolver, CustomerService],
  exports: [CustomerService]
})
export class CustomerModule {}