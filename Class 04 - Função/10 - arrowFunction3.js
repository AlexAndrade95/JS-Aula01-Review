// Arrow Function
// bind 

// Função normal
let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj) //true

// Arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true