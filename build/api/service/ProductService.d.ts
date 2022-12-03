import Product from "../model/interfaces/Product";
import User from "../model/interfaces/User";
declare const _default: {
    DateNow(): Promise<string>;
    RegisterProduct(data: Product, user: User): Promise<{
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
    UpdateProduct(data: Product, user: User): Promise<{
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
    ListProduct(data: Product, user: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        code: number;
        status: boolean;
        message: string;
        data: Product;
    } | {
        code: number;
        status: boolean;
        message: string;
        data: null;
    }>;
    DeleteProduct(data: Product, user: User): Promise<{
        code: number;
        status: boolean;
        message: string;
        data: unknown;
    }>;
};
export default _default;
