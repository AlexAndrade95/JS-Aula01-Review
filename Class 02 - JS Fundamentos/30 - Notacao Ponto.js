//Notação ponto 
// é o ponto que antecede funções (Exemplo console.log , o "." que antecede a função log é uma notação ponto)

console.log(Math.ceil(6.1)) //7 

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)//Bola

function Obj(nome){
    this.nome = nome //o this torna o parâmetro "nome" público
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) //Cadeira
console.log(obj3.nome) //Mesa
obj3.exec() //Exec...
