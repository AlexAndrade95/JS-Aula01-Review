// funcao anonima
// funcao que não possui nome
// arrow function sempre são anonimas

const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) //7
imprimirResultado(3, 4, soma) //7
imprimirResultado(3, 4, function (x,y){
    return x - y
}) //-1
imprimirResultado(3,4, (x,y) => x * y) //12

const pessoal = {
    falar: function() {
        console.log("Opa")
    }
}

pessoal.falar() //Opa