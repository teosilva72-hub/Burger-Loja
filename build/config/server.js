"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("../app"));
require("./sql/mongodb");
const PORT = Number(process.env.PORT) || 7272;
app_1.default.listen(PORT, () => { console.log('Server run on PORT:', PORT); });
