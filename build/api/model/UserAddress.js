"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const userAddress = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    road: String,
    number: String,
    district: String,
    city: String,
    state: String,
    cep: Number,
    complement: String,
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
userAddress.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});
exports.default = (0, mongoose_2.model)("UserAddress", userAddress);
