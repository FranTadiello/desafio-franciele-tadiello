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
            if(qtd == 0){
                throw new Error("Erro de quantidade");
            }
            somaValores += cardapio[produto].valor*qtd 
        })
        return somaValores
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorBruto
        if(itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }
        try {
            valorBruto = this.calcularValorDosItens(itens)    
        } catch (error) {
            return 'Quantidade inválida!'
        }

        const taxa = this.calcularTaxa(metodoDePagamento)
        return `R$ ${((valorBruto*taxa).toFixed(2)).replace(".",",")}`;
    }

}

export { CaixaDaLanchonete };
