let lyDistance = prompt ("Qual a distância em anos-luz?")
let lyConvercion = prompt ("Digite o numero da opção que deseja converter: \n1- Parsec (PC) \n2- Unidade astronômica (AU) \n3- Quilômetros (KM)")

let optionSelect
let convertedValue

switch (lyConvercion) {
    case "1":
        optionSelect = "Parsec"
        convertedValue = lyDistance * 0.306601
        break
    case "2":
        optionSelect = "Unidade astronômica"
        convertedValue = lyDistance * 63241.11
        break
    case "3":
        optionSelect = "Quilômetros"
        convertedValue = lyDistance * 9.5 * Math.pow(10, 12)
        break
    default:
        alert ("Distância em anos-luz: " + lyDistance + "\nUnidade não identificada: Conversão fora do escopo" )
}

alert ("Distância : " + lyDistance + "\nUnidade de conversão : " + optionSelect + "\nValor convertido : " + convertedValue )
