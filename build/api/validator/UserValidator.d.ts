import User from "../model/interfaces/User";
declare const _default: {
    Retorno(data: any): Promise<{
        code: any;
        status: any;
        message: any;
        data: any;
    }>;
    ValidUser(data: any): Promise<string[]>;
    EmailValidator(data: string): Promise<boolean>;
    UserExists(data: object): Promise<boolean>;
    DeleteUser(data: any): Promise<boolean>;
    GetOneUser(data: any): Promise<boolean>;
    RecoverPass(data: User): Promise<boolean>;
};
export default _default;
