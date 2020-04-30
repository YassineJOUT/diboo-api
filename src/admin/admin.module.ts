import { Module } from '@nestjs/common';
import { AdminResolver } from './admin.resolver';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './schema/admin.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }])],
    providers: [AdminService, AdminResolver]
})
export class AdminModule {}
