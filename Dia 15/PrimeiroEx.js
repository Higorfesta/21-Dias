let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

function acharNumero(array1, array2){
let resultado = []
let contar = 0
for(i = 0; i < array1.length; i++){
  for(j = 0; j < array2.length; j++){
    if(array1[i] == array2[j]){
      resultado[contar] = array2[j]
      contar++
    }
  }
}
return resultado
}
console.log(acharNumero(arrayA, arrayB))