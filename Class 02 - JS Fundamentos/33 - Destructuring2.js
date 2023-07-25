const [a] = [10]
console.log(a) //10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //não é usual, pois é de difícil leitura
console.log(n1, n3, n5, n6) //10 9 undefined 0

const [,[, nota]] = [[, 8, 8], [9, 6, 8]] //não é usual, pois é de difícil leitura
console.log(nota) //6