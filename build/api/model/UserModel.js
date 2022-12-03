"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    nickName: String,
    email: String,
    password: String,
    cell: String,
    sex: String,
    birth: String,
    photo: String,
    levelAccess: Number,
    token: String,
    created: String,
    edited: String,
    deleted: Boolean,
    active: Boolean
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
userSchema.virtual('LevelAccess', {
    ref: 'LevelAccess',
    localField: 'levelAccess',
    foreignField: '_id',
    justOne: true
});
exports.default = (0, mongoose_2.model)("User", userSchema);
