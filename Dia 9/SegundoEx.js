let continuar = true
let ano = Number(2023)

while(continuar){
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    let salario = Number(prompt("Digite seu salário atual: "))
    console.log("Nome: " + nome)
    console.log("Idade: " + idade)
    console.log("Salário Atual: " + salario)
    let correto = prompt("Se as informações estiverem corretas digite 1, caso contrário digite 2.")
    if(correto != 1){
        console.log("Favor inserir novamente as informações.")
    }else{
        continuar = false
    }
    if(continuar == false){
        for(contar = Number(1); contar < 11; contar++){
            let aumento = 2
            salario = salario+(salario*(0.015*aumento))
            aumento *= 2
        console.log("Seu salário em " + (ano+contar) + " será de: " + salario)
    }
}
}
