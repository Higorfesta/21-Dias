let continuar = true


class Livro{
  constructor(titulo, autor, editora, anopubli, disponibilidade){
    this.titulo = titulo
    this.autor = autor
    this.editora = editora
    this.anopubli = anopubli
    this.disponibilidade = true
  }
}
let livro1 = new Livro("O andar do bebado", "Leonard", "Editora1", "2008")
let livro2 = new Livro("Os criadores de coincidencias", "Yoav Blum", "Editora2", "2017")
let livro3 = new Livro("Sul materialismo aleatorio", "Louis Althusser", "Editora3", "1999")
let livro4 = new Livro("Fracasso e acaso", "Luiz Alberto", "Editora4", "2018")


let colecao1 = [livro1, livro2, livro3, livro4]


class Biblioteca{
  constructor(nome, endereco, telefone, acervo){
    this.nome = nome
    this.endereco = endereco
    this.telefone = telefone
    this.acervo = colecao1
  }
  encontrar(){
    let livro = prompt("Digite o nome do livro que você procura: ")
    for(let i = 0; i < colecao1.length; i++){
      if(livro == colecao1[i].titulo){
        console.log(colecao1[i].titulo + " Autor: " + colecao1[i].autor + " Editora: " + colecao1[i].editora + " Ano de lançamento: " + colecao1[i].anopubli)
      }
      }
      }
  emprestimo(){
    let pegar = prompt("Digite o nome do livro que você deseja pegar na biblioteca: ")
    for(let i = 0; i < colecao1.length; i++){
    if(pegar == colecao1[i].titulo && colecao1[i].disponibilidade == true){
         console.log("Livro emprestado.")
         colecao1[i].disponibilidade = false
  }else if(pegar == colecao1[i].titulo && colecao1[i].disponibilidade == false){
    console.log("Esse livro está emprestado")
  }
  }
}
  devolver(){
    let devolu = prompt("Digite o nome do livro que você deseja devolver na biblioteca: ")
    for(let i = 0; i < colecao1.length; i++){
      if(devolu == colecao1[i].titulo && colecao1[i].disponibilidade == false){
        colecao1[i].disponibilidade = true
        console.log("Livro devolvido com sucesso.")
      }else if(devolu == colecao1[i].titulo && colecao1[i].disponibilidade == true){
        console.log("Esse livro não foi emprestado.")
      }
    }
  }
}


let Biblioteca1 = new Biblioteca("Biblioteca Municipal", "Antonio Pedro", "1699346027")


while(continuar){
  let opcao = prompt("Digite 1 para Consultar o nome de um livro, 2 para Retirar, 3 para Devolver e 4 para Encerrar: ")
  switch(opcao){
    case "1":
      Biblioteca1.encontrar()
      break
    case "2":
      Biblioteca1.emprestimo()
      break
    case "3":
      Biblioteca1.devolver()
      break
    case "4":
      console.log("Programa encerrado.")
      continuar = false
      break
    default:
      console.log("Erro")
      break
  }
}