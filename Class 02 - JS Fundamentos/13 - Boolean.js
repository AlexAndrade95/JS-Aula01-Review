// Boolean

let isAtivo = false
console.log(isAtivo)

    isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// !! é usado para mostrar se o valor é false ou true

console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //com espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos:')
console.log(!!0)
console.log(!!'') //sem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || " "))

let nome = "Lucas"
console.log(nome || 'Desconhecido')
