//1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
//1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
//1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
//1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".
let escolha = prompt("Escolha para abastecer com Álcool, Gasolina ou Calibrar os pneus")

switch(escolha){
    case "Gasolina":
        let gaso = Number(prompt("Quantos reais você gostaria de abastecer?"))
        console.log("Você abasteceu " + (gaso/5) + " litros.")
        break
    case "Álcool":
        let alco = Number(prompt("Quantos reais você gostaria de abastecer?"))
        console.log("Você abasteceu " + (alco/3) + " litros.")
        break
    case "Calibrar":
        console.log("pneus calibrados com sucesso")
        break
    default:
        console.log("Error")
        break
}
