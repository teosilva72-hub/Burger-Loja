/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import Product from '../model/interfaces/Product';
declare const _default: {
    RegisterProduct(data: Product): Promise<any>;
    UpdateProduct(data: Product): Promise<any>;
    ListProduct(): Promise<any>;
    GetOneProduct(id: string): Promise<(import("mongoose").Document<unknown, any, {
        photo?: string | undefined;
        created?: string | undefined;
        edited?: string | undefined;
        deleted?: boolean | undefined;
        active?: boolean | undefined;
        categoria?: string | undefined;
        nome?: string | undefined;
        modelo?: string | undefined;
        marca?: string | undefined;
        descricao?: string | undefined;
        cod_barras?: string | undefined;
        dt_fabricacao?: string | undefined;
        dt_validade?: string | undefined;
        fabricante?: string | undefined;
        localizacao?: string | undefined;
        valor?: string | undefined;
        quantidade?: number | undefined;
        userCreated?: import("mongoose").Types.ObjectId | undefined;
        userEdited?: import("mongoose").Types.ObjectId | undefined;
    }> & {
        photo?: string | undefined;
        created?: string | undefined;
        edited?: string | undefined;
        deleted?: boolean | undefined;
        active?: boolean | undefined;
        categoria?: string | undefined;
        nome?: string | undefined;
        modelo?: string | undefined;
        marca?: string | undefined;
        descricao?: string | undefined;
        cod_barras?: string | undefined;
        dt_fabricacao?: string | undefined;
        dt_validade?: string | undefined;
        fabricante?: string | undefined;
        localizacao?: string | undefined;
        valor?: string | undefined;
        quantidade?: number | undefined;
        userCreated?: import("mongoose").Types.ObjectId | undefined;
        userEdited?: import("mongoose").Types.ObjectId | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }) | never[] | null>;
    DeleteProduct(data: Product): Promise<any>;
};
export default _default;
