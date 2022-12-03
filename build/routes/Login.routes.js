"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../api/controller/LoginController"));
const routes = (0, express_1.Router)();
routes.post('/login', LoginController_1.default.Login);
exports.default = routes;
