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


if (velocity <= 0){
    alert ( "Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert ("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity < 80) {
    alert ("Parece uma boa velocidade para manter")
} else if (velocity >= 80 && velocity < 100) {
    alert ("Velocidade alta. Considere diminuir")
} else if (velocity >= 100) {
    alert ("Velocidade perigosa. Controle automático forçado")
}

alert ("Piloto: " + pilotName + "\nVelocidade atual: " + velocity)