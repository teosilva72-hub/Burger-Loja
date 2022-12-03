"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../api/controller/ProductController"));
const auth_1 = __importDefault(require("../config/middleware/auth"));
const files_1 = __importDefault(require("../config/upload/files"));
const routes = (0, express_1.Router)();
routes.post('/product-register', auth_1.default, ProductController_1.default.ResgisterProduct, files_1.default.array('photo', 10));
routes.put('/product-edit/:id', auth_1.default, ProductController_1.default.UpdateProduct);
routes.delete('/product-delete/:id', auth_1.default, ProductController_1.default.DeleteProduct);
routes.get('/product-list', ProductController_1.default.ListProduct);
routes.post('/setfiles', files_1.default.array('photo', 10), ProductController_1.default.setFile);
exports.default = routes;
