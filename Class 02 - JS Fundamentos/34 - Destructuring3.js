function rand({ min = 0, max = 1000}){  //destructuring
    const valor = Math.random() * (max - min) +  min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //apresentará valor randomico entre 40 e 50
console.log(rand({ min: 955})) //apresentará valor randomico entre 9555 e 1000
console.log(rand({})) //apresentará valor randomico entre 0 e 1000
// console.log(rand()) //apresentará erro