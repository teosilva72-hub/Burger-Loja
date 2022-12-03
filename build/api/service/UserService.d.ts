import 'dotenv/config';
import User from '../model/interfaces/User';
declare const _default: {
    DateNow(): Promise<string>;
    NewToken(): Promise<string>;
    HtmlEmail(data: User): Promise<string>;
    RegisterUser(data: User, files: any): Promise<{
        code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        code: number;
        status: boolean;
        message: string;
        data: unknown;
    }>;
    UpdateUser(data: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: User;
    } | {
        code: number;
        status: boolean;
        message: string;
        data: string[];
    } | {
        code: number;
        status: boolean;
        message: string;
        data: null;
    }>;
    DeleteUser(data: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: {
            data: User;
        };
    } | {
        code: number;
        status: boolean;
        message: string;
        data: null;
    }>;
    ListUser(data: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: User;
    } | {
        code: number;
        status: boolean;
        message: string;
        data: null;
    }>;
    GetLogado(id: User, photo: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: any;
    }>;
    RecoverPass(data: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: any;
    }>;
    HtmlRecoverpass(data: User): string;
};
export default _default;
