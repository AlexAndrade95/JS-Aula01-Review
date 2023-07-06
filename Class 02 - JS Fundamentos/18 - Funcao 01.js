// Função 01
// a função é um verbo, pois ela define uma ação
// possui bloco nomeado, com entrada

// Funcao sem Retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3) //5
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 11, 12) //12, pois somou os dois primeiros valores

// Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3)) //5
console.log(soma(2)) //3, somou com o valor padrão b = 1
