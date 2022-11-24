import {Schema} from 'mongoose';
import { model } from 'mongoose';

const LevelAccess = new Schema({
   name:String,
   level:Number
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export default model("LevelAccess", LevelAccess);