function TratarErroELancar(erro){
    // throw new Error(...)
    // throw 20
    // throw true
    // throw mensagem
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUppercase() + "!!!!")
    }catch (e){
        TratarErroELancar(e)
    }finally{
        console.log("final")
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)