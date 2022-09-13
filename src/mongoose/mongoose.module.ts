import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminSchema } from './admin-model';
import {kt_ref_UserProjectSchema} from './kt_user_ref_model'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Admin', schema: AdminSchema },
      { name: 'kt_ref_user', schema: kt_ref_UserProjectSchema }
    ]),
  ],
  exports: [MongooseModule],
  
})
export class MongooseSchemasModule {}
// export class MongooseSchemasModule {}
