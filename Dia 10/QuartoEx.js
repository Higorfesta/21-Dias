let array = []
let numero = parseInt(prompt("Digite um número: "))
array[0] = numero-1
array[1] = numero

for(contar = 2; contar < 10; contar++){
  array[contar] = array[contar-1] + array[contar-2]
}
for(contar = 0; contar < 10; contar++){
  console.log(array[contar])
}