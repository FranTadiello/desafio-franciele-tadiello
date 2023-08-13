import cardapio from "./model/Cardapio";

class CaixaDaLanchonete {
    calcularTaxa (metodoDePagamento) {
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

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

export { CaixaDaLanchonete };
