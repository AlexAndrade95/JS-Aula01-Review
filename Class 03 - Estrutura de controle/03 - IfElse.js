const imprimirResultado = function(nota){
    if(nota >=7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}

imprimirResultado(10) //Aprovado
imprimirResultado(4)  //Reprovado
imprimirResultado("Epa !!!") // cuidado, pois como JS é fracamante tipada, resultará em false e apresentará "Reprovado"