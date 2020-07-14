import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { KitchenSchema } from './schemas/kitchen.schema';
import { CategorySchema } from './schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Kitchen', schema: KitchenSchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}
