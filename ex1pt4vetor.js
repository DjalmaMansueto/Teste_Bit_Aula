const prompt = require('prompt-sync')();

var vetor = [];
for(let i=0; i<10;i ++){
    let num = prompt("Digite um Numero correto: ")
    vetor.push(num)
   
}
for(let i = vetor.length-1; i >= 0; i--){
    console.log(vetor[i])

}
