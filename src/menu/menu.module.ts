import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { KitchenSchema } from './schemas/kitchen.schema';
import { CategorySchema } from './schemas/category.schema';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Kitchen', schema: KitchenSchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'Item', schema: ItemSchema },
    ]),
  ],
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}
