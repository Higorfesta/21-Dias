let array = []
let perguntar = Number(prompt("Insira quantos números você deseja colocar no array: "))

for(contar = (perguntar-1); contar >= 0; contar--){
  let numero = parseInt(prompt("Digite um número inteiro e positivo"))
  array[contar] = numero
}
for(contar = 0; contar <= (perguntar-1); contar++){
  console.log(array[contar])
}