let array = []

for(contar = 4; contar >= 0; contar--){
  let numero = parseInt(prompt("Digite um número inteiro e positivo"))
  array[contar] = numero
}
for(contar = 0; contar <= 4; contar++){
  console.log(array[contar])
}