// Arrow Function
// função com sintaxe reduzida,
// possui o this constante!!

// função normal
let dobro = function (a) {
    return 2 * a
}

// Arrow function
dobro = (a) => {
    return 2 * a
}

// ou

dobro = a => 2 *a // return implícito
console.log(dobro(3)) //6


// função normal (String)
let ola = function () {
    return 'Olá'
}

// Arrow function (String)
ola = () => 'Olá'
console.log(ola()) //Olá