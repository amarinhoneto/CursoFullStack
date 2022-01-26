let departureDateEntry = prompt ("Digite a data de partida (formato DD/MM/YYYY)")
let departureDate = moment (departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate
let chosenOption = prompt ("Escolha como gostaria de exibir o tempo de partida\n1- Segundo\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round ( dateDiff / 1000)         //Math.round server pra arredondar o valor do calculo
    alert ("tempo de vôo: " + secondsOfDeparture + " segundos")
} else if (chosenOption == "2") {
    let minutsOfDeparture = Math.round ( dateDiff / 1000 / 60)
    alert ("tempo de vôo: " + minutsOfDeparture + " minutos")
} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round ( dateDiff / 1000 / 3600)
    alert ("tempo de vôo: " + hoursOfDeparture + " horas")
} else if (chosenOption == "4") {
    let daysOfDeparture = Math.round ( dateDiff / 1000 / 3600 / 24)
    alert ("tempo de vôo: " + daysOfDeparture + " dias")
} else {
    alert ("Opção inválida")
}