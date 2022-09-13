import mongoose from 'mongoose';
import {kt_ref_UserProject} from './kt_user_ref_model'
const { Schema } = mongoose

export interface Admin extends mongoose.Document {
  email: string,
  fullName:String,
  active:Boolean,
  registeredOn:Date,
  lastLogin : Date,
}

export const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fullName : {
    type : String,
    required : true,
  },
  active:{
    type:Boolean
  },
  registeredOn: {
    type:Date
  },
  lastLogin: {
    type:Date
  },
  projects : { 
    kt_ref_user_projects : [ { 
      type : mongoose.Schema.Types.ObjectId ,
      ref: 'kt_ref_UserProject' 
      } ] , 
  },
  // refenvid: { 
  //   type : Array ,
  // }
})
