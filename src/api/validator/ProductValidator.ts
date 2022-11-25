import Product from "../model/interfaces/Product";
export default new class{
    async RegisterProduct(data:Product){
        let msg = '';
        if(data.categoria.trim() == '' || data.categoria.trim() == undefined) msg += 'Categoria é um campo obrigatório.';
        else if(data.nome.trim() == '' || data.nome.trim() == undefined) msg += 'Nome é um campo obrigatório.';
        else if(data.marca.trim() == '' || data.marca.trim() == undefined) msg+= 'Marca é um campo obrigatório.';
        else if(data.descricao.trim() == '' || data.descricao.trim() == undefined) msg += 'Descrição é um campo obrigatório.';
        else if(data.dt_fabricacao.trim() == '' || data.dt_fabricacao.trim() == undefined) msg += 'Data de fabricação é um campo obrigatório.';
        else if(data.dt_validade.trim() == '' || data.dt_validade.trim() == undefined) msg += 'Data de validade é um campo obrigatório.';
        let ArrayMsg = msg.split('.');
        const Retorno:string[] = ArrayMsg.filter(function (i) {
            return i;
        });
        return Retorno;
    }
}