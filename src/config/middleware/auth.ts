import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import 'dotenv/config';

export default (
    req: any,
    res: Response,
    next: NextFunction,
) => {

    try {

        //validar se existe authorization no header
        const authHeader = req.headers.authorization;

        if (!authHeader) throw 'Acesso não autorizado (code 1)';

        //validar se há 2 partes authorization
        const parts = authHeader.split(' ');
        if (parts.length < 2) throw 'Acesso não autorizado (code 2)';

        (req.headers.authorization);

        //validar schema do authorization "Bearer"
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) throw 'token invalido'

        if (!token) throw 'Token Invalido';

        if (process.env.SECRET) {
            jwt.verify(token, process.env.SECRET, function (err: any, decode: any) {
                if (err) throw 'Token Invalido';
                req.id = decode.id;
                req.name = decode.name;
                req.email = decode.email;
                req.nickname = decode.nickname;
                req.access = decode.access;
            });
        }
    } catch (e: any) {
        return res.status(401).json({ code: 401, status: false, message: 'Token inválido.', data: null });
    }
    return next();
};