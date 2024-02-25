let nome
let salario
let aumento
let novosalario
let denovo
let continuar = true

while(continuar){
function pergunta(){
    nome = prompt("Insira seu nome")
    salario = Number(prompt("Insira seu salário"))
}
pergunta()
    function aumentosalario(){
    if(salario <=1500){
        aumento = 0.20
    }else if(salario >1500 && salario <=2000){
        aumento = 0.15
    }else if(salario > 2000 && salario <=3000){
        aumento = 0.10
    }else{
        aumento = 0.05
    }
    novosalario = salario + (salario*aumento)
    }
aumentosalario()
console.log(nome + " " + salario + " " + aumento + " " + novosalario)
    function calculoagain(){
        denovo = prompt("Para fazer outro reajuste salarial digite 1")
        if(denovo != 1){
            continuar = false
        }
    }
    calculoagain()
}