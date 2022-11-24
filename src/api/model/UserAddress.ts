import {Schema} from 'mongoose';
import {model} from 'mongoose';
const userAddress = new Schema({
    userId:{type: Schema.Types.ObjectId, ref: "User"},
    road:String,
    number:String,
    district:String,
    city:String,
    state:String,
    cep:Number,
    complement:String,    
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

userAddress.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

export default model("UserAddress", userAddress);