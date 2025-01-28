const prompt = require('prompt-sync')();
const idade1 = parseFloat(prompt('Quantos dias de vida você viveu até hoje ? digite sua idade para descobrir:'));
var dias1 = 365;
var resultado =(dias1 * idade1); 
console.log('seus dias vivido são de : ', resultado);


