import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { DMMFClass } from '@prisma/client/runtime';
import AdminJS from 'adminjs';
import { AppController } from './app.controller';
import {AppService} from './app.service'

const AdminJSMongoose = require('@adminjs/mongoose')
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Database, Resource } from '@adminjs/mongoose';
import { MongooseSchemasModule } from './mongoose/mongoose.module';
import { getModelToken } from '@nestjs/mongoose';
import { Admin } from './mongoose/admin-model';
import {kt_ref_UserProject, kt_ref_UserProjectSchema} from './mongoose/kt_user_ref_model'
// AdminJS.registerAdapter({AdminJSMongoose})
AdminJS.registerAdapter({ Database, Resource });
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://rahulrm:rahulrm@cluster0.turyd6o. mongodb.net/?retryWrites=true&w=majority"),
    AdminModule.createAdminAsync({
      imports: [
        MongooseSchemasModule,
      ],
      inject: [
        getModelToken('Admin'),

        
        // getModelToken('kt_ref_UserProject')
      ],
      useFactory: (adminModel: Model<Admin>, kt_ref : Model<kt_ref_UserProject>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [{
            resource :[ adminModel ,kt_ref], 
          },
          // {
          //   resource : kt_ref
          // }
             
          ],
        },
      }),
    }),
    MongooseSchemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// mongodb+srv://apiAdmin:apiAdmin123@cluster0.9z5v0.mongodb.net/AdminJSDB