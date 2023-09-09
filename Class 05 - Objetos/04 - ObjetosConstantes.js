// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
//{ nome: 'Pedro' }


// pessoa -> 456 -> {...}
// pessoa = [ nome: 'Ana']
// apresentará erro, pois pessoa é constante

// Para tornar um objeto ConstantSourceNode(usa-se Object,freeze)
// Exemplo
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
//Pedro
console.log(pessoa)
//{ nome: 'Pedro' }

// Outro exemplo
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
//{ nome: 'Joao' }