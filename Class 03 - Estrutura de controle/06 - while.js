// while
// estrutura de repetição quando se tem uma quantidade indeterminada de vezes
// enquanto true continua, quando false para

function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')

//apresentará Opção escolhida foi (algum número aleatório até aparecer o -1)
//Até a próxima