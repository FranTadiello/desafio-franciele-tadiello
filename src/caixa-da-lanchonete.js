import cardapio from "./model/Cardapio";

class CaixaDaLanchonete {
    calcularTaxa(metodoDePagamento) {
        switch(metodoDePagamento){
            case "dinheiro":
                return 0.95
            case "credito":
                return 1.03
            case "debito":
                return 1
            default:
                throw new Error("Erro de metodo de pagamento");   
        }
    }
    calcularValorDosItens(itens){
        let somaValores = 0
        let produtosCardapio = []
        let nomeDosItens = []
        itens.forEach(item => {
            item = item.split(",")
            
            let produto = item[0]            
            
            nomeDosItens.push(produto)

            produto = cardapio[produto]
                
            if(item.length < 2 || produto === undefined){
                throw new Error("Erro de entrada de itens");
            }
            
            const qtd = item[1]

            if(qtd == 0){
                throw new Error("Erro de quantidade");
            }

            somaValores += produto.valor*qtd 
            produtosCardapio.push(produto)
        })

        produtosCardapio.forEach(produto => {
            if(produto.principal){
                if(!nomeDosItens.includes(produto.principal)){
                    throw new Error("Erro de falta de item principal");  
                }
            }
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
            if(error.message === "Erro de falta de item principal"){
                return 'Item extra não pode ser pedido sem o principal'
            }
        }
        
        return `R$ ${((valorBruto*taxa).toFixed(2)).replace(".",",")}`;
    }

}

export { CaixaDaLanchonete };
