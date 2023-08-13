import cardapio from "./model/Cardapio";

class CaixaDaLanchonete {
    calcularTaxa(metodoDePagamento) {
        switch(metodoDePagamento){
            case "dinheiro":
                return 0.95
                break
            case "credito":
                return 1.03
                break
            case "debito":
                return 1
                break
            default:
                throw new Error("Erro de metodo de pagamento");   
        }
    }
    calcularValorDosItens(itens){
        let somaValores = 0
        itens.forEach(item => {
            item = item.split(",")
            
            let produto = item[0]            
            produto = cardapio[produto]

            if(item.length < 2 || produto === undefined){
                throw new Error("Erro de entrada de itens");
            }
            
            const qtd = item[1]

            if(qtd == 0){
                throw new Error("Erro de quantidade");
            }

            somaValores += produto.valor*qtd 
        })
        return somaValores
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorBruto
        let taxa
        if(itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }
        try {
            valorBruto = this.calcularValorDosItens(itens)
            taxa = this.calcularTaxa(metodoDePagamento)
        } catch (error) {
            if(error.message === "Erro de quantidade"){
                return 'Quantidade inválida!'
            }
            if(error.message === "Erro de entrada de itens"){
                return 'Item inválido!'
            }
            if(error.message === "Erro de metodo de pagamento"){
                return 'Forma de pagamento inválida!'
            }
        }
        
        return `R$ ${((valorBruto*taxa).toFixed(2)).replace(".",",")}`;
    }

}

export { CaixaDaLanchonete };
