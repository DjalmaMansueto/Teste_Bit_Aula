const prompt = require('prompt-sync')();

var vetor = [];

for(let i=0; i<10;i++){
    let num = prompt("Digite um Numero ")
    vetor.push(num)
}
for(let i=0; i<vetor.length;i++ ){
    if (vetor[i]<0){
        vetor[i]=0;

    }
}
console.log(vetor)
