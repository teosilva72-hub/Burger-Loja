"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_routes_1 = __importDefault(require("./Login.routes"));
const User_routes_1 = __importDefault(require("./User.routes"));
const Product_routes_1 = __importDefault(require("./Product.routes"));
const routes = (0, express_1.Router)();
routes.use(Login_routes_1.default);
routes.use(User_routes_1.default);
routes.use(Product_routes_1.default);
exports.default = routes;
