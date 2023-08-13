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
        }
    }
    calcularValorDosItens(itens){
        let somaValores = 0
        itens.forEach(item => {
            item = item.split(",")
            const produto = item[0]
            const qtd = item[1]
            somaValores += cardapio[produto].valor*qtd 
        })
        return somaValores
    }
    calcularValorDaCompra(metodoDePagamento, itens) {

        if(itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }

        const taxa = this.calcularTaxa(metodoDePagamento)
        const valorBruto = this.calcularValorDosItens(itens)
        return `R$ ${((valorBruto*taxa).toFixed(2)).replace(".",",")}`;
    }

}

export { CaixaDaLanchonete };
