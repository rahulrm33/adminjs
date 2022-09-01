import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { DMMFClass } from '@prisma/client/runtime';
import AdminJS from 'adminjs';
import { AppController } from './app.controller';
import {AppService} from './app.service'

const AdminJSMongoose = require('@adminjs/mongoose')
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongooseSchemasModule } from './mongoose/mongoose.module';
import { getModelToken } from '@nestjs/mongoose';
import { Admin } from './mongoose/admin-model';

AdminJS.registerAdapter(AdminJSMongoose)

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://johnsamuel21:jmeas1999@cluster0.m7jsc.mongodb.net/?retryWrites=true&w=majority'),
    AdminModule.createAdminAsync({
      imports: [
        MongooseSchemasModule,
      ],
      inject: [
        getModelToken('Admin'),
      ],
      useFactory: (adminModel: Model<Admin>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource: adminModel },
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