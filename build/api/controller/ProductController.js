"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
exports.default = new class {
    ResgisterProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const user = req;
            const retorno = yield ProductService_1.default.RegisterProduct(data, user);
            return res.status(retorno.code).json(retorno);
        });
    }
    UpdateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            data.id = req.params.id;
            const user = req;
            const retorno = yield ProductService_1.default.UpdateProduct(data, user);
            return res.status(retorno.code).json(retorno);
        });
    }
    DeleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            data.id = req.params.id;
            const user = req;
            const retorno = yield ProductService_1.default.DeleteProduct(data, user);
            return res.status(retorno.code).json(retorno);
        });
    }
    ListProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req;
            const user = req;
            const retorno = yield ProductService_1.default.ListProduct(data, user);
            res.status(retorno.code).json(retorno);
        });
    }
    setFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json('sucess');
            }
            catch (error) {
                console.log(error);
                return res.status(200).json('error');
            }
        });
    }
};
