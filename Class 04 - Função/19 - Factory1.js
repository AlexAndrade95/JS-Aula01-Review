// Função Factory, é uma função que retorna um objeto

// Factory simples
function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criaPessoa())
//{ nome: 'Ana', sobrenome: 'Silva' }