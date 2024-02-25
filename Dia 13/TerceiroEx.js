//Crie uma classe Corrida com as seguintes propriedades:
//Nome - nome do local da corrida;
//Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
//Distancia - o total em metros da corrida;
//Participantes - um array de objetos da classe Carro
//Vencedor - qual a equipe que ganhou a corrida;
//Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe carro.
//Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.
//5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.
//6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.
//7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.

class Carro{
    constructor(nome, potencia, velocidade, aceleracao, distancia){
      this.Nome = nome
      this.Potencia = potencia
      this.Velocidade = velocidade
      this.Aceleracao = aceleracao
      this.Distancia = distancia
    }
    tempo(distancia){
      let tempoCorrida = (this.distancia / (this.velocidade / this.aceleracao))
    }
  }

class Corrida{
    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = participantes[]
        this.Vencedor = ""
    }
    ganhador(){
        let menorTempo = this.Participantes[0].tempoCorrida(this.Distancia)
        let vencedor = this.Participantes[0]
        for(index = 0; index < this.Participantes.length; index++){
            
        }
    }
}

let corrida = new Corrida("Fusca", "Formula 1", 80000)

corrida.Participantes[0] = new Carro("Meriva", 10, 150, 20)
corrida.Participantes[1] = new Carro("Ferrari", 20, 180, 15)
corrida.Participantes[2] = new Carro("Fox", 12, 250, 30)