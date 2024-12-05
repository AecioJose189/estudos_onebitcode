
const valor = prompt("CONVERSOR DE MEDIDAS \n Digite o valor em metros: ")
const opcao = prompt("Digite a opção que você deseja converter: \nmilímetros[mm]\ncentímetro[cm] \ndecímetro[dm]\ndecâmetro[dam] \nhectômetro[hm] \nquilômetro[km]") 

switch (opcao){
    case 'mm':
        alert(valor*1000)
        break
    case 'cm':
        alert(valor*100)
        break
    case 'dm':
        alert(valor*10)
        break
    case 'dam':
        alert(valor*0.1)
        break
    case 'hm':
        alert(valor*0.01)
        break
    case 'km':
        alert(valor*0.01)
        break
    default:
        alert("Opção inválida")
}