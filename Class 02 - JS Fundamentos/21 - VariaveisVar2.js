var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//dentro = 2
//fora = 2
//aparecerá 2 duas vezes, pois a variável VAR NÃO TEM ESCOPO DE BLOCO!!!
//variável VAR só tem escopo de global e de função
