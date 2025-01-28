const prompt = require('prompt-sync')();
let senha  = Number(prompt('Digite uma senha'))

var tamanho = senha.length >= 8;
var temNumeros =/\d/.test(senha)
var temMaiusculos = /[A-Z]/.test(senha)
var temMinusculos =/[a-z]/.test(senha)
var temCaracter = /[*&@#]/.test(senha)

if(tamanho && temMaiusculos && temMinusculos && temNumeros){
    console.log('Senha criada com sucesso')
}else{
    console.log('senha fraca')
}
