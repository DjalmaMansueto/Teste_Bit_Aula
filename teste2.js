var n1 = 3;
const n2 = 1;
if(true){
    const n2 = 10;
    var n1 = 15;
    var resultadoEscopo = n1 + n2;
}
//n2 = 10
var resultado = n1+n2;

console.log('n1+n2 = resultado ='+resultado);
console.log('n1+n2 = resultadoEscopo ='+resultadoEscopo);
