// getters e setters são usados para adicionar condições dentro de uma mesma função

// Exemplo
const sequencia = {
    _valor: 1, //o "_" no começo da variável é uma convenção de que a mesma deve ser usada no contexto interno
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this.valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
//1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
//1000 1001
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
//1003 1004 (não serão 901 902, pois não atende a condição do set)