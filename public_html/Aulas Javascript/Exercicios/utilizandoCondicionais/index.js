alert ("Olá piloto ! Tudo bem ? A seguir vamos pedir algumas informações !")

let pilotName = prompt ("Qual o seu nome?")
let velocity = 0
let prefVelocity = prompt ("Qual a velocidade que devo seguir?")
let velocityConfirmation = confirm ("Vamos iniciar nossa viagem à " + prefVelocity + "Km/s?")

if (velocityConfirmation == false) {
    prefVelocity = prompt ("Qual a velocidade correta?")

    velocityConfirmation = confirm ("Vamos iniciar nossa viagem à " + prefVelocity + "Km/s?")
}

velocity = prefVelocity


if (velocity <= 100){
    confirm ("Velocidade muito baixa, deixa alterar?")
    e
}



