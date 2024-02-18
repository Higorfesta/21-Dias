//Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
//- A média geral dos alunos
//- Quantos homens enviaram as notas
//- Quantas mulheres tiveram nota acima de 7
//- Qual a maior nota entre os homens
//*Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos!


let contarNota = 0
let contarHomem = 0
let contarMulher = 0
let contar = 0
let contarMulherSete = 0
let maiorNotaHomem = 0

let condicao = true
let desejo = prompt("Para inserir outro aluno digite 1")
if(desejo == 1){
while(condicao){
    let nota = Number(prompt("Digite a nota do aluno"))
    contarNota += nota
    let sexo = prompt("Digite M para masculino e F para feminino")
    if(sexo == "M"){
        contarHomem += 1
        if(nota > maiorNotaHomem){
            maiorNotaHomem = nota
        }
    }
    if(sexo == "F"){
        contarMulher += 1
        if(nota > 7){
            contarMulherSete += 1
        }
    }
    contar += 1
    let desejo = prompt("Para inserir outro aluno digite 1")
    if(desejo != 1){
        condicao = false
}
}
}else{
    console.log("Nada")
}
console.log("A média geral dos alunos é igual a: " + contarNota / contar)
console.log("A quantidade de homens que enviaram as notas é igual a: " + contarHomem)
console.log("A quantidade de mulheres que tiveram no acima de 7 é: " + contarMulherSete)
console.log("A maior nota entre os homens foi a de: " + maiorNotaHomem)
