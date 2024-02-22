let array = []

for(contar = 0; contar < 10; contar++){
  let numero = parseInt(prompt("Insira um número inteiro e positivo: "))
  array[contar] = numero
  console.log(array[contar] + " está no indice " + contar)
}