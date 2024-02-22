let nomes = []
let notas = []
let continuar = true
let contar = 0
let notaTotal = 0

while(continuar){
  let perguntaNome = prompt("Insira o nome do aluno: ")
  nomes[contar] = perguntaNome
  let perguntaNota = Number(prompt("Insira a nota do aluno: "))
  notas[contar] = perguntaNota
  contar++
  let inserir = prompt("Para inserir um novo aluno digite 1.")
  if(inserir != 1){
    continuar = false
  }
}
for(index = 0;index < notas.length;index++){
  console.log(nomes[index] + " tirou nota " + notas[index])
  notaTotal = notaTotal + notas[index]
}
console.log("A soma das notas dos alunos é igual a: " + notaTotal)
console.log("A média das notas dos alunos é igual a: " + (notaTotal/notas.length))