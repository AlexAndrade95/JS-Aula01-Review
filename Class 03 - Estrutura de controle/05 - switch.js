// switch 
// é uma seleção multipla

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Rerovado')
            break
        default:
            console.log('Nota inválida') 
    }
}

imprimirResultado(10) // Quadro de honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.5) // Recuperação
imprimirResultado(2.3) // Rerovado
imprimirResultado(-1) // Nota inválida
imprimirResultado(11) // Nota inválida