let distanceInLY = prompt = ("Digite a distancia")
let chosenOption = prompt = ("Selecione a opção - 1. Parsec (PC) \n2. Unidade astronômica (AU) \n3. Quilômetros (KM)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parcec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenOption = "Unidade Astrônomica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenOption = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert ("Distância em anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)