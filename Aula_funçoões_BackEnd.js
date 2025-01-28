function mediaVetores(vetVetor) {
 var vlrMedia = 0
    for (var i = 0; i < vetVetor.length; i++){
       vlrMedia = vlrMedia + vetVetor [i];
    }
    vlrMedia = vlrMedia/vetVetor.length;
    return vlrMedia
}

var vetor = [10,5,5,10]

var valorRetornado = mediaVetores(vetor);
var teste = console.log(valorRetornado);
console.log(teste);



