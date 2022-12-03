declare const _default: {
    RegisterUser(data: any): Promise<any>;
    UserExists(data: string): Promise<boolean>;
    GetOneUser(data: any): Promise<any>;
    UpdateUser(data: any): Promise<any>;
    RecoverPass(data: any): Promise<any>;
    DeleteUser(data: string): Promise<import("mongodb").DeleteResult>;
    GetUser(): Promise<any>;
};
export default _default;
