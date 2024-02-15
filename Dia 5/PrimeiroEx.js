//1.1 - Crie um algoritmo que peça 2 números ao usuário
//1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
//1.3 - Exiba no console a operação feita e o resultado da conta
let numeroUm = Number(prompt("Insira um Número"))
let numeroDois = Number(prompt("Insira outro Número"))
let executar = Number(prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão"))

switch(executar){
    case 1:
        console.log(numeroUm + numeroDois)
        break
    case 2:
        console.log(numeroUm - numeroDois)
        break
    case 3:
        console.log(numeroUm * numeroDois)
        break
    case 4:
        console.log(numeroUm / numeroDois)
        break
    default:
        console.log("Erro")
        break
}
