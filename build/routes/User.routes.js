"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../api/controller/UserController"));
const auth_1 = __importDefault(require("../config/middleware/auth"));
const files_1 = __importDefault(require("../config/upload/files"));
const routes = (0, express_1.Router)();
routes.post('/user-register', files_1.default.array('photo', 1), UserController_1.default.RegisterUser);
routes.put('/user-edit', auth_1.default, files_1.default.array('photo', 1), UserController_1.default.UpdateUser);
routes.delete('/user-delete', auth_1.default, UserController_1.default.DeleteUser);
routes.get('/user-list', auth_1.default, UserController_1.default.ListUser);
routes.get('/user-logado', auth_1.default, UserController_1.default.GetUserLogado);
routes.post('/recover-pass', UserController_1.default.RecoverPass);
exports.default = routes;
