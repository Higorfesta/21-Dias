class Carro{
    constructor(nome, potencia, velocidade, aceleracao, distancia){
      this.nome = nome
      this.potencia = potencia
      this.velocidade = velocidade
      this.aceleracao = aceleracao
      this.distancia = distancia
    }
    tempo(){
      console.log(this.distancia / (this.velocidade / this.aceleracao))
    }
  }
  let distancia = prompt("Digite a distancia que será percorrida em metros")
  let carro1 = new Carro("Fusca", 700, 180, 20, distancia)
  
  carro1.tempo()