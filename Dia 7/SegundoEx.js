//Solicite o nome e o cpf do seu cliente.
//Pergunte um valor.
//Ofereça a opção de saque ou depósito.
//Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
//Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
//Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
//Exiba o saldo total.
//Exiba o maior valor inserido(independente de ser depósito ou saque).
//Exiba a média dos valores inseridos(independente de ser depósito ou saque).

//REGRAS: 
//    1- Considere iniciar a variável saldo com algum valor
//    1- Não deve ser permitido sacar um valor não disponível no saldo.
//    2- Não deve ser permitido sacar nem depositar um valor negativo.

let nome = prompt("Digite seu nome: ")
let cpf = prompt("Digite seu CPF: ")
let saldo = Number(1000)
let condicao = true
let maiorValor = 0
let mediaValor = 0
let contar = 0

while(condicao){
    let escolha = prompt("Para sacar digite 1 para depositar digite 2")
    if(escolha == 1){
        let saque = Number(prompt("Qual seria o valor desejado para sacar?"))
        if(saque < 0){
            console.log("Não é possível sacar um número negativo")
        }else if(saque > saldo){
            console.log("Não é possível retirar dinheiro que você não possui!!")
        }else{
            if(saque > maiorValor){
                maiorValor =+ saque
            }
            saldo = saldo - saque
            mediaValor = mediaValor + saque
        }
    }
    if(escolha == 2){
        let deposito = Number(prompt("Qual seria o valor desejado para deposito?"))
        if(deposito < 0){
            console.log("Não é possível depositar um número negativo")
        }else{
            if(deposito > maiorValor){
                maiorValor =+ deposito
            }
            saldo = saldo + deposito
            mediaValor = mediaValor + deposito
        }
    }
    console.log(saldo)
    contar ++
    let continuar = prompt("Para continuar digite 1 para parar digite 2")
    if(continuar != 1){
        condicao = false
    }
}
console.log(saldo)
console.log("O maior valor inserido foi de: " + maiorValor)
console.log("A média dos valores de saque de deposito inseridos é igual a: " + mediaValor / contar)
