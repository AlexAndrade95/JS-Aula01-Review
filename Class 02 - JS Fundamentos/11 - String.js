// String

const escola = "Cod3r"

console.log(escola.charAt(4)) //r
console.log(escola.charAt(5)) //(valor vazio)
console.log(escola.charCodeAt(3)) //51 (tabela asc)
console.log(escola.indexOf(3)) //3

console.log(escola.substring(1)) //od3r
console.log(escola.substring(0, 3)) //Cod

console.log("Escola".concat(escola).concat("!")) //EscolaCod3r
console.log(escola.replace(3, "e")) //Coder
 
console.log("Ana,Maria,Pedro".split(","))//[ 'Ana', 'Maria', 'Pedro' ]

