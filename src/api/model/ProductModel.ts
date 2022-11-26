import {Schema} from 'mongoose';
import { model } from 'mongoose';

const ProductSchema = new Schema({
    categoria:String,
    nome:String,
    modelo:String,
    marca:String,
    descricao:String,
    cod_barras:String,
    dt_fabricacao:String,
    dt_validade:String,
    fabricante:String,
    localizacao:String,
    photo:Array,
    quantidade:Number,
    created:String,
    userCreated:{type: Schema.Types.ObjectId, ref: 'user'},
    edited:String,
    userEdited:{type: Schema.Types.ObjectId, ref: 'user'},
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