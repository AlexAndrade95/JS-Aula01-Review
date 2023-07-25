function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //apresentará valor randomico entre 40 e 50
console.log(rand([992])) //995
console.log(rand([, 10])) //apresentará valor randomico entre 0 e 10
console.log(rand([])) //apresentará valor randomico entre 0 e 1000
// console.log(rand()) //apresentará erro