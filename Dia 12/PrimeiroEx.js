let nomes = []
let senhas = []
let continuar = true
let contar = 0

while(continuar){
  let opcao = Number(prompt("Para cadastro digite 1, para login digite 2, para excluir um cadastro digite 3 e para encerrar digite 4."))
  switch(opcao){
    case 1:
      let nome = prompt("Insira o nome: ")
      nomes[contar] = nome
      let senha = prompt("Insira uma senha: ")
      senhas[contar] = senha
      contar++
      break
    case 2:
      let loginNome = prompt("Insira o nome para Login.")
      for(i = 0;i < nomes.length;i++){
        if(loginNome == nomes[i]){
          let loginSenha = prompt("Insira a senha para Login")
          for(a = 0;a < senhas.length;a++){
            if(loginSenha == senhas[a]){
              console.log("Logado com Sucesso.")
            }else{
              console.log("Senha Incorreta")
            }
          }
        }else{
              console.log("Login inexistente.")
        }
        }
      break
    case 3:
      let excluirNome = prompt("Qual o nome para excluir: ")
      for(b = 0;b < nomes.length;b++){
        if(excluirNome == nomes[b]){
          nomes[b] = null
          senhas[b] = null
        }else{
          console.log("Esse nome não existe")
        }
  }
      break
    case 4:
      continuar = false
      break
    default:
      continuar = false
}
}
