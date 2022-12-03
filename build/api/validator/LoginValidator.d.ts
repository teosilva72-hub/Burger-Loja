declare const _default: {
    Retorno(data: any): Promise<{
        code: any;
        status: any;
        message: any;
        data: any;
    }>;
    VerifyAccess(data: object): Promise<string[]>;
    EmailValidator(data: string): Promise<boolean>;
    UserExists(data: object): Promise<boolean>;
};
export default _default;
