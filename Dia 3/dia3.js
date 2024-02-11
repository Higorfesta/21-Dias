let nome = prompt("Digite seu nome")
let idade = Number(prompt("Qual sua idade"))
let altura = Number(prompt("Qual sua altura"))
let peso = Number(prompt("Qual seu peso"))

let anoNascimento = (2023 - idade)
let IMC = peso/(altura*altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + " de altura, pesa " + peso + "Kg seu IMC é " + IMC + " Kg/m²")