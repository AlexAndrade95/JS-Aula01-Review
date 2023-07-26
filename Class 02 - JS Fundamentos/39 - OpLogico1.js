function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //or
    const comprarTV50 = trabalho1 && trabalho2 //and
    // const comprarTV32 = !!(trabahlo1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 //xor (or exclusivo)
    const manterSaudavel = !comprarSorvete //operador unario , negação
  
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))