//Dados 02
// podemos usar var ou let para designar variáveis

let preco = 19.90
let desconto = 0.4 //40% de desconto
let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto)

//Pode-se concatenar String com variáveis
let nome = "Caderno" 
let categoria = "Papelaria"
console.log("Produto: " + nome
        + ", Categoria: " + categoria
        + ", Preço: " +     preco
        + ", Desconto: " + desconto
            )