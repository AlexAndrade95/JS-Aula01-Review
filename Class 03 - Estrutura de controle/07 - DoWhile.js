// Do while
// igual a while, só que será feito o loop pelo menos uma vez

function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima!')

//apresentará Opção escolhida foi (algum número aleatório até aparecer o -1)
//Até a próxima!