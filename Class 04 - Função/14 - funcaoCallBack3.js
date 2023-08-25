// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!')
}
//no browser, ao clicar no body da página, irá aparecer 'o evento ocorreu'
