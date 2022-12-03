"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const LevelAccess = new mongoose_1.Schema({
    name: String,
    level: Number
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.default = (0, mongoose_2.model)("LevelAccess", LevelAccess);
