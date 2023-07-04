// Array

const valores = [1, 2 , 3, 4,]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')// em JS o araay aceita diferentes tipos
console.log(valores)

console.log(valores.pop()) //pop retira o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
