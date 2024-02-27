let nomes = []
let senhas = []
let contar = 0
let continuar = true

function selecionar(){
    let selecao = prompt("Insira 1 para cadastro, 2 para login, 3 para excluir um cadastro ou 4 para encerrar o programa.")
    return selecao
}
function cadastro(){
    let nome = prompt("Insira um nome: ")
    let senha = prompt("Insira a senha: ")
    nomes[contar] = nome
    senhas[contar] = senha
    contar++
}
function login(){
    let loginnome = prompt("Insira um nome para logar: ")
    for(index = 0; index < nomes.length; index++){
        if(nomes[index] == loginnome){
            let loginsenha = prompt("Insira a senha: ")
            if(loginsenha == senhas[index]){
                console.log("Logado com sucesso.")
            }else{
                console.log("Senha Incorreta.")
            }
        }else{
            console.log("Login Incorreto")
        }
    }
}
function excluir(){
    let loginexcluir = prompt("Insira o login que deseja excluir: ")
    for(i = 0; i < nomes.length; i++){
    if(loginexcluir == nomes[i]){
        nomes[i] = null
        senhas[i] = null
    }
    }
}
while(continuar){
switch(selecionar()){
    case "1":
        cadastro()
        break;
    case "2":
        login()
        break;
    case "3":
        excluir()
        break;
    case "4":
        continuar = false
        console.log("Programa Encerrado.")
        break;
    default:
        continuar = false
        console.log("Erro")
}
}