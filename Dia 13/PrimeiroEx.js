class Computador{
    constructor(tipo, processador, video, armazenamento, ram, ssd){
      this.tipo = tipo
      this.processador = processador
      this.video = video
      this.armazenamento = armazenamento
      this.ram = ram
      this.ssd = ssd
    }
    especificacoes(){
      console.log(`${this.tipo}, ${this.processador}, ${this.video}, ${this.armazenamento}, ${this.ram}, ${this.ssd}`)
    }
  }
  
  let computador1 = new Computador("Notebook", "I3", "1050", "HD 500GB", "4GB", "256GB")
  computador1.especificacoes()