function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)//Aprovado com 8.1
soBoaNoticia(6.1)

function SeforVerdadeEufalo(valor){
    if(valor){
        console.log("É verdade..." + valor)
    }
}

SeforVerdadeEufalo()
SeforVerdadeEufalo(null)
SeforVerdadeEufalo(undefined)
SeforVerdadeEufalo(NaN)
SeforVerdadeEufalo('')
SeforVerdadeEufalo(0)
SeforVerdadeEufalo(-1)  //É verdade...-1
SeforVerdadeEufalo(' ') //É verdade... 
SeforVerdadeEufalo('?') //É verdade...?
SeforVerdadeEufalo([])  //É verdade...
SeforVerdadeEufalo([1,2]) //É verdade...1,2