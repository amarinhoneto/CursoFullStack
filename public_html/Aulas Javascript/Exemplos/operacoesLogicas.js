
/*
E (and) = &&
OU (our) = ||
NÃO (not) = ! 

if = "se" . Controle de trafego
else = "se não"
*/


let velocity = 90 

if (velocity < 100) {
    console.log ("Estamos numa velocidade aceitável")
} 


let velocity = 110 

if (velocity < 100) {
    console.log ("Estamos numa velocidade aceitável")
} else {
    console.log("Entrado em velocidade de risco")
}


/*
let velocity = 30 / 60 / 110 

if (velocity < 40) {
    console.log ("Velocidade baixa")
} else {
  if(velocity <= 100) {
    console.log ("Cuidado! Próximo à velocidade de risco")
  } else{
    console.log( "Velocidade de Risco!")
  }
}  */ 


let velocity = 110 

if (velocity < 40) {
    console.log ("Velocidade baixa")
} else if(velocity <= 100) {
    console.log ("Cuidado! Próximo à velocidade de risco")
} else{
    console.log( "Velocidade de Risco!")
}

(velocity > 100) ? console.log ("Velocidade maior que 100") : console.log("Velocidade menor que 100")