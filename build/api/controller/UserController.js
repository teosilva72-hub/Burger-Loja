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
const UserService_1 = __importDefault(require("../service/UserService"));
exports.default = new class {
    RegisterUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield UserService_1.default.RegisterUser(req.body, req.files);
            return res.status(retorno === null || retorno === void 0 ? void 0 : retorno.code).json(retorno);
        });
    }
    UpdateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            data.id = req.id;
            data.photo = req.files[0].filename;
            console.log(data);
            const retorno = yield UserService_1.default.UpdateUser(data);
            return res.status(retorno === null || retorno === void 0 ? void 0 : retorno.code).json(retorno);
        });
    }
    DeleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.body;
            data.id;
            data.name = req.name;
            data.email = req.email;
            const retorno = yield UserService_1.default.DeleteUser(data);
            return res.status(retorno === null || retorno === void 0 ? void 0 : retorno.code).json(retorno);
        });
    }
    ListUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = req.params;
            data.level = req.access;
            data.id = req.id;
            const retorno = yield UserService_1.default.ListUser(data);
            return res.status(retorno.code).json(retorno);
        });
    }
    GetUserLogado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('aqui');
            const id = req.id;
            const photo = req.query;
            const retorno = yield UserService_1.default.GetLogado(id, photo);
            return res.status(retorno.code).json(retorno);
        });
    }
    RecoverPass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const retorno = yield UserService_1.default.RecoverPass(data);
            return res.status(retorno.code).json(retorno);
        });
    }
};
