// const nomeCar1 = prompt()
// const velCar1 = prompt()

// const nomeCar2 = prompt()
// const velCar2 = prompt()


// if(nomeCar1>nomeCar2){
//     alert("O maior é o "+nomeCar1+"\n"+velCar1)
// }if(nomeCar1<nomeCar2){
//     alert("O maior é o "+nomeCar2+"\n"+velCar2)
// }else{
//     alert("São iguais.")
// }

const nome1 = prompt("Digite o nome do primeiro personagem: ")
const poderAtq = prompt("Digite o poder de ataque do primeiro personagem: ")

const nome2 = prompt("Digite o nome do segundo personagem: ")
let  pontosVid = prompt("Digite a quantidade de pontos de vida do segundo personagem: ")
const poderDef = prompt("Digite o poder de defesa do primeiro personagem: ")
const escudo = prompt("possui escudo? ")
const dano = poderAtq-poderDef

if (poderAtq>poderDef && escudo=='Não'){
    dano
}if (poderAtq>poderDef && escudo=='Sim'){
    dano/2
}if (poderAtq<=poderDef){
    dano = 0
}

pontosVid -= dano

alert(
    nome1 +"\n"+ dano +"\n"+ poderAtq +"\n"+ nome2 +"\n"+ pontosVid +"\n"+ poderDef +"\n"+ escudo
)