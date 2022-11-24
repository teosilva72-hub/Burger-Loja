import {Schema} from 'mongoose';
import { model } from 'mongoose';

const userSchema = new Schema({
    name:String,
    nickName:String,
    email:String,
    password:String,
    cell:String,
    sex:String,
    birth:String,
    photo:String,
    levelAccess:Number,
    token:String,
    created:String,
    edited:String,
    deleted:Boolean,
    active:Boolean
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

userSchema.virtual('LevelAccess', {
    ref: 'LevelAccess',
    localField: 'levelAccess',
    foreignField: '_id',
    justOne: true
});

export default model("User", userSchema);