let arrayHotel = []
let arrayReserva = []
let hotelCategoria = []
let continuar = true

class Hotel{
  constructor(id, nome, categoria, endereco, telefone){
    this.id = id
    this.nome = nome
    this.categoria = categoria
    this.endereco = endereco
    this.telefone = telefone
  }
}
class Reserva{
  constructor(id, hotelid, nome, entrada, saida){
    this.id = id
    this.hotelid = hotelid
    this.nome = nome
    this.entrada = entrada
    this.saida = saida
  }
}
function cadastroHotel(){
  let idH = prompt("Insira o ID do Hotel: ")
  let nomeH = prompt("Insira o Nome do Hotel: ")
  let categoriaH = prompt("Insira a Categoria do Hotel: ")
  let enderecoH = prompt("Insira o Endereço do Hotel: ")
  let telefoneH = prompt("Insira o Telefone do Hotel: ")
  let Hostel = new Hotel(idH, nomeH, categoriaH, enderecoH, telefoneH)
  arrayHotel.push(Hostel)
}
function cadastroReserva(){
  let hotelidR = prompt("Insira o ID do hotel: ")
  for(i = 0; i < arrayHotel.length; i++){
  if(arrayHotel[i].id == hotelidR){
    let idR = prompt("Insira o ID da reserva: ")
    let nomeR = prompt("Insira o Nome para reserva: ")
    let entradaR = prompt("Insira o dia de Entrada no Hotel: ")
    let saidaR = prompt("Insira o dia de Saída do Hotel: ")
    let Reservar = new Reserva(idR, hotelidR, nomeR, entradaR, saidaR)
    arrayReserva.push(Reservar)
  }else{
    console.log("Esse ID de hotel é inexistente.")
  }
}
}
function exibirReserva(){
  let exibir = prompt("Insira o ID do hotel que deseja ver as reservas: ")
  for(i = 0; i < arrayHotel.length; i++){
    if(exibir == arrayHotel[i].id){
      console.log("Hotel ID: " + arrayHotel[i].id + " Nome: " + arrayHotel[i].nome)
      console.log("As seguintes reservas estão feitas no hotel: ")
      for(x = 0; x < arrayReserva.length; x++){
        if(exibir == arrayReserva[x].hotelid){
          console.log("Nome: " + arrayReserva[x].nome + " Dia de entrada: " + arrayReserva[x].entrada + " Dia de Saída: " + arrayReserva[x].saida)
        }
      }
    }
  }
}
function consultarReservarID(){
  let consultaID = prompt("Digite o ID de uma reserva para consultar: ")
  for(i = 0; i < arrayReserva.length; i++){
    if(consultaID == arrayReserva[i].id){
      for(x = 0; x < arrayHotel.length; x++){
        if(arrayReserva[i].hotelid == arrayHotel[x].id){
          console.log("Hotel: " + arrayHotel[x].nome + ". Endereço: " + arrayHotel[x].endereco + ". Dia para Entrada: " + arrayReserva[i].entrada + ". Dia para Saída: " + arrayReserva[i].saida + ".")
        }
      }
    }
  }
}
function consultarNome(){
  let consultaNome = prompt("Digite o nome que deseja consultar: ")
  for(i = 0; i < arrayReserva.length; i++){
    if(consultaNome == arrayReserva[i].nome){
      console.log("Nome: " + arrayReserva[i].nome + " Data de Entrada: " + arrayReserva[i].entrada + " Data de Saída: " + arrayReserva[i].saida + ".")
    }
  }
}
function consultarCategoria(){
    hotelCategoria = []
  let consultaCategoria = prompt("Digite a categoria dos hotéis desejados: ")
  for(i = 0; i < arrayHotel.length; i++){
    if(consultaCategoria == arrayHotel[i].categoria){
      hotelCategoria.push(arrayHotel[i].nome)
    }
  }
  console.log(hotelCategoria)
}
function cadastroTelefone(){
  let perguntaHo = prompt("Insira o ID do hotel para cadastro do telefone: ")
  for(i = 0; i < arrayHotel.length; i++){
    if(perguntaHo == arrayHotel[i].id){
      let trocaTelefone = prompt("Insira o novo número de telefone para cadastro: ")
      arrayHotel[i].telefone = trocaTelefone
    }else{
      console.log("Esse ID de hotel não está cadastrado.")
    }
  }
}
while(continuar){
  let opcao = prompt("Para prosseguir insira: | 1 - Cadastrar um Hotel | 2 - Cadastrar uma Reserva em um Hotel | 3 - Consultar as Reservas a partir do ID de um Hotel | 4 - Consultar as Reservas a partir do ID | 5 - Consultar o nome de uma pessoa | 6 - Consultar uma categoria de Hotel | 7 - Atualizar o telefone | 8 - Encerrar o programa |")
  switch(opcao){
      case "1":
        cadastroHotel()
        break
      case "2":
        cadastroReserva()
        break
      case "3":
        exibirReserva()
        break
      case "4":
        consultarReservarID()
        break
          case "5":
            consultarNome()
            break
          case "6":
            consultarCategoria()
            break
          case "7":
            cadastroTelefone()
            break
          case "8":
            continuar = false
            console.log("Programa Encerrado.")
            break
          default:
            console.log("Erro")
            continuar = false
            break
}
}
