let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
//dentro = 2
//fora = 1
//aparecerão 2 resultados diferentes, pois a variável LET POSSUI ESCOPO DE BLOCO!!!
//diferente da variável VAR a LET possui escopo global, de função e BLOCO!
