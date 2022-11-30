import ProductValidator from "../validator/ProductValidator";
import Product from "../model/interfaces/Product";
import ProductRepository from "../repository/ProductRepository";
import moment from "moment";
import User from "../model/interfaces/User";
export default new class {
    async DateNow() {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
    async RegisterProduct(data: Product, user: User) {
        try {
            if (user.access == 1) {
                const checked = await ProductValidator.ValidaBody(data);
                if (checked.length == 0) {
                    data.created = await this.DateNow();
                    data.active = true;
                    data.userCreated = user.id;
                    data.deleted = false;
                    data.edited = ""
                    const created: Product = await ProductRepository.RegisterProduct(data);
                    return { code: 201, status: true, message: 'Produto criado com sucesso!', data: created };
                } else return { code: 400, status: false, message: '*Campos obrigatórios!', data: checked };
            } else return { code: 401, status: false, message: 'Usuário não tem autorização para criar produto!' };
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: error };
        }
    }
    async UpdateProduct(data: Product, user: User) {
        try {
            if (user.access == 1) {
                const checked = await ProductValidator.ValidaBody(data);
                if (checked.length == 0) {
                    data.edited = await this.DateNow();
                    data.userEdited = user.id;
                    const getProd: any = await ProductRepository.GetOneProduct(data.id);
                    console.log(getProd)
                    if (getProd.length == 0) return { code: 400, status: false, message: 'Produto não encontrado.' };
                    else{ 
                        const update: Product = await ProductRepository.UpdateProduct(data);
                        return { code: 200, status: true, message: 'Produto atualizado com sucesso', data: update };
                    }
                } else return { code: 400, status: false, message: '*Campos obrigatórios', data: checked };
            } else return { code: 401, status: false, message: 'Usuário não tem autorização para editar produto!' };
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: error };
        }
    }
    async ListProduct(data: Product, user: User) {
        try {
            const list: Product = await ProductRepository.ListProduct();
            const check: string[] = Object.values(list);
            if (check.length == 0) return { code: 400, status: false, message: 'Nenhum produto para ser listado.' };
            else return { code: 200, status: true, message: 'Produto listado com sucesso', data: list }
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: null };
        }
    }
    async DeleteProduct(data: Product, user: User) {
        try {
            if (user.access == 1) {
                const getProd: any = await ProductRepository.GetOneProduct(data.id);
                if (getProd.length == 0) return { code: 400, status: false, message: 'Produto não encontrado.', data: null };
                else {
                    const deleted: Product = await ProductRepository.DeleteProduct(data);
                    return { code: 200, status: true, message: 'Produto deletado com sucesso', data: deleted };
                }
            } else return { code: 401, status: false, message: 'Usuário não tem autorização para deletar produtos.', data: null };
        } catch (error) {
            console.log(error);
            return { code: 500, status: false, message: 'Server Error', data: error };
        }
    }
}