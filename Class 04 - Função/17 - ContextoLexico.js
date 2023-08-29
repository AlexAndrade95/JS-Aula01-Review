const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
//Global
//irá buscar no contexto lexico aonde a função foi declarada,
//nesse caso o valor = "Global"