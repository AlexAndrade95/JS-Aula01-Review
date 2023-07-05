// object
// objeto em JS é uma coleção de chaves e valor

const prod1  = {}
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1) //{ preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.00
}
console.log(prod2) //{ nome: 'Camisa Polo', preco: 79 }