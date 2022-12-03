"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    categoria: String,
    nome: String,
    modelo: String,
    marca: String,
    descricao: String,
    cod_barras: String,
    dt_fabricacao: String,
    dt_validade: String,
    fabricante: String,
    localizacao: String,
    valor: String,
    photo: String,
    quantidade: Number,
    created: String,
    userCreated: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    edited: String,
    userEdited: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    active: Boolean,
    deleted: Boolean,
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
ProductSchema.virtual('user', {
    ref: 'User',
    localField: 'userCreated',
    foreignField: '_id',
    justOne: false
});
exports.default = (0, mongoose_2.model)("Product", ProductSchema);
