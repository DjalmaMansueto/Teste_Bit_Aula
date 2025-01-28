function lerNumero(){
    const prompt = require('prompt-sync')();
 
    var numero = prompt("Digite um numero: ")
 
    if (isNaN(numero))
    {
        console.log('Isso não é um número, digite novamente');
        return lerNumero()
    }
 console.log("Numero Correto")
    return Number(numero)

}
 
var teste = lerNumero();
