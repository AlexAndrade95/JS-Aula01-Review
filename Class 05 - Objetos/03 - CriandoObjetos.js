// usando a notação Literal
const obj1 = {}
console.log(obj1)
//{}

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
//function object
//{}

// funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPreComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99 , 0.25)
console.log(p1.getPreComDesconto(), p2.getPreComDesconto())
//6.7915 2249.2425

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
//6916 11020

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
//[Object: null prototype] { nome: 'Ana' }

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
//{ info: 'Sou um JSON' }