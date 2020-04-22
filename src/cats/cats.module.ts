import { Module } from '@nestjs/common';
import { catsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from 'src/db/schemas/cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Cat', schema: CatSchema
  }])],
  providers: [catsResolver,CatsService],
})
export class CatsModule {}
