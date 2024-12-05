const nomeTurista = prompt("Digite o nome do turista: ")
let visitouCidade = prompt("Visitou alguma cidade? ")
let qntCidades = 0
let quaisCidades = ''

while (visitouCidade === 'Sim'){
    const nomeCidade = prompt("Digite o nome da cidade: ")
    quaisCidades += nomeCidade + '\n'
    visitouCidade = prompt("Visitou mais alguma cidade? ")
    qntCidades+=1
}
alert(
    "Nome do turista: "+nomeTurista+"\n"+
    "Quantas cidades ele visitou: "+qntCidades+"\n"+
    "Quais cidades ele visitou? "+quaisCidades
)