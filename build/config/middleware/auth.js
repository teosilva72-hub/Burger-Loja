"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
exports.default = (req, res, next) => {
    try {
        //validar se existe authorization no header
        const authHeader = req.headers.authorization;
        if (!authHeader)
            throw 'Acesso não autorizado (code 1)';
        //validar se há 2 partes authorization
        const parts = authHeader.split(' ');
        if (parts.length < 2)
            throw 'Acesso não autorizado (code 2)';
        (req.headers.authorization);
        //validar schema do authorization "Bearer"
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme))
            throw 'token invalido';
        if (!token)
            throw 'Token Invalido';
        if (process.env.SECRET) {
            jsonwebtoken_1.default.verify(token, process.env.SECRET, function (err, decode) {
                if (err)
                    throw 'Token Invalido';
                req.id = decode.id;
                req.name = decode.name;
                req.email = decode.email;
                req.nickname = decode.nickname;
                req.access = decode.access;
            });
        }
    }
    catch (e) {
        return res.status(401).json({ code: 401, status: false, message: 'Token inválido.', data: null });
    }
    return next();
};
