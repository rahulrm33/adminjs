import mongoose from 'mongoose';

const { Schema } = mongoose

export interface kt_ref_UserProject extends mongoose.Document {
  projectid: mongoose.Schema.Types.ObjectId,
  role:mongoose.Schema.Types.ObjectId,
  team:mongoose.Schema.Types.ObjectId,
  accesslevel:mongoose.Schema.Types.ObjectId,
  status : String,
}

export const kt_ref_UserProjectSchema = new Schema({
  projectid: {
    type: mongoose.Schema.Types.ObjectId,
  },
  role : {
    type: mongoose.Schema.Types.ObjectId,
  },
  team:{
    type: mongoose.Schema.Types.ObjectId,
  },
  accesslevel: {
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String
  },
})
