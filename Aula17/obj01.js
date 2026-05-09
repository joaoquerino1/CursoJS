const amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(3)

console.log(`O ${amigo.nome} pesa ${amigo.peso}KG`)