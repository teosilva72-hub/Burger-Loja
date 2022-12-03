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
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
exports.default = new class {
    SendEmail(data, html) {
        return __awaiter(this, void 0, void 0, function* () {
            let transporter = nodemailer_1.default.createTransport({
                host: process.env.emailSmtp,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.emailUser,
                    pass: process.env.emailPass, // generated ethereal password
                }
            });
            transporter.sendMail(yield this.MailOption(data, html), (error, info) => {
                if (error)
                    console.log(error);
                else
                    console.log(info);
            });
        });
    }
    MailOption(data, html) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                from: process.env.emailUser,
                to: data.email,
                subject: 'Token de validação.',
                html: `${html}`
            };
        });
    }
};
