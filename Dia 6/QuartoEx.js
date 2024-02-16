//4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
//Ex: Números de entrada:3
//Saída:  Número 3:      Número 4:         Número 5:       

//3 x 1 = 3      4 x 1 = 4         5 x 1 = 5

//3 x 2 = 6      4 x 2 = 8         5 x 2 = 10

//3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          

//3 x 4 = 12     4 x 4 = 16        5 x 4 = 20      
let numero = Number(prompt("Insira um numero"))

for(contagem = 0; contagem <= 10; contagem++){
    console.log(numero*contagem)
    console.log((numero+1)*contagem)
    console.log((numero+2)*contagem)
}
