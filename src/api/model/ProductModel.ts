import { Double } from 'bson';
import {Schema} from 'mongoose';
import { model } from 'mongoose';
import { double } from 'webidl-conversions';

const ProductSchema = new Schema({
    titulo:String,
    premio:String,
    descricao:String,
    valor:Number,
    photo:String,
    dt_init:String,
    dt_final:String,
    dt_sorteio:String,
    active:Boolean,
    deleted:Boolean,
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

ProductSchema.virtual('user', {
    ref: 'User',
    localField: 'userCreated',
    foreignField: '_id',
    justOne: false
});

export default model("Product", ProductSchema);