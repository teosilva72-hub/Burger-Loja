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
const UserModel_1 = __importDefault(require("../model/UserModel"));
const UserValidator_1 = __importDefault(require("../validator/UserValidator"));
exports.default = new class {
    RegisterUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield UserModel_1.default.create(data);
            return db;
        });
    }
    UserExists(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findOne({ email: data });
            return yield UserValidator_1.default.UserExists(user);
        });
    }
    GetOneUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield UserModel_1.default.findOne(data);
            return db;
        });
    }
    UpdateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield UserModel_1.default.updateOne({ _id: data.id }, data);
            return db;
        });
    }
    RecoverPass(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            const db = yield UserModel_1.default.updateOne({ email: data.email }, data);
            return db;
        });
    }
    DeleteUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield UserModel_1.default.deleteOne({ _id: data });
            return db;
        });
    }
    GetUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield UserModel_1.default.find();
            return db;
        });
    }
};
