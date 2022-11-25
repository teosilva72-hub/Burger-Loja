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
    edited:String,
    active:Boolean,
    
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});


export default model("Product", ProductSchema);