// Objetos
// São coleção dinâmicas de chaves/valor

// Formas de criar objetos:
const produto = new Object
produto.nome = 'Cadeira'
produto['marca de produto'] = "Genérica"
produto.preco = 200
console.log(produto)
// { nome: 'Cadeira', 'marca de produto': 'Genérica', preco: 200 }

delete produto.preco
delete produto['marca de produto']
console.log(produto)
//{ nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)
// {
//     modelo: 'A4',
//     valor: 89000,
//     proprietario: {
//       nome: 'Raul',
//       idade: 56,
//       endereco: { logradouro: 'Av. Gigante', numero: 1000 }
//     },
//     condutores: [ { nome: 'Júnior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
//     calcularValorSeguro: [Function: calcularValorSeguro]
//   }