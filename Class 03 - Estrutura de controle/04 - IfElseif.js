Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log("Quadro de honra")
    } else if(nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)) {
        console.log("Aprovado")
    } else if(nota.entre(0, 3.99)) {
        console.log("Aprovado")
    }else {
        console.log("Nota inválida")
    }
}

imprimirResultado(10)   //Quadro de honra
imprimirResultado(8,9)  //Aprovado
imprimirResultado(6,55) //Aprovado
imprimirResultado(2,3)  //Aprovado
imprimirResultado(-1)   //Nota inválida
imprimirResultado(11)   //Nota inválida