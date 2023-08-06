function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[1]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(1)) //1
console.log(soma(1.1, 2.2, 3.3)) //6
console.log(soma(1.1, 2.2, "Teste")) //3.3Teste
console.log(soma("a", "b", "c"))  //0abc

