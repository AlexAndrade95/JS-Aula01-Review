const funcs = []

for (var i = 0; i < 0; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()  //10
funcs[8]()  //10

//obs: mostrará o valor 10 pois var não tem escopo de bloco.