//INCOMPLETO
let anos = []
let modelos = []
let valores = []
let continuar = true
let contar = 0

while(continuar){
  let modelos[contar] = prompt("Insira o modelo do carro: ")
  let anos[contar] = prompt("Insira o ano do carro: ")
  let valores[contar] = prompt("Insira o valor do carro: ")
  contar++
  let para = prompt("Para inserir mais um veiculo digite 1")
  if(para != 1){
    continuar = false
  }
}
for(index = 0;index < anos.length;index++){
  console.log(modelos[index] + ", " + anos[index] + " Valor: " + valores[index] + ".")
}