let nome = prompt("Insira seu nome: ")
let idade = prompt("Insira sua idade: ")
let peso = Number(prompt("Insira seu peso: "))
let altura = Number(prompt("Insira sua altura: "))
let profissao = prompt("Insira sua profissão: ")
let dias = parseInt((idade*365))
let semanas = parseInt(dias/7)
let mes = parseInt(dias/30)

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "kg.")
if(idade < 18){
    console.log("Sem geladas para você")
}else{
    console.log("Está liberado para tomar umas geladas.")
}
console.log("Se colocarmos sua idade em outras formas de medida você teria " + mes + " meses de vida, " + semanas + " semanas e " + dias + " dias.")

let IMC = peso/(altura*altura)

if(IMC < 18.5){
    console.log("Magreza")
}else if(IMC >= 18.5 && IMC < 24.9){
    console.log("Normal")
}else if(IMC >= 24.9 && IMC < 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}

let anonasceu = 2023 - idade
console.log("Você nasceu em: " + anonasceu)

for(contar = 0; contar <= idade; contar++){
    console.log("Em " + (anonasceu+contar) + " você tinha " + contar + " anos.")
}

let continuar = true

while(continuar){
    let novo = prompt("Para inserir mais alguma informação sua digite 1 para finalizar digite 2.")
    if(novo == 1){
        let informacao = prompt("O que você gostaria de informar?")
        console.log(informacao)
    }else{
        continuar = false
    }
}
