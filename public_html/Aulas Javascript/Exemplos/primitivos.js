
//COMENTAR UMA LINHA

/*  COMENTARIO
            DE
                VARIAS LINHAS */  


console.log("Bem vindo à nave Elemental") //imprimir a log no console//

console.info("Bem vindo à nave Elemental") //imprimir a log com coloração diferente//

console.warn("Bem vindo à nave Elemental") //imprimir a log com coloração diferente//

console.error("Bem vindo à nave Elemental") //imprimir a log com coloração diferente//

alert("Bem vindo à nave Elemental") // alerta com apenas o botão OK //

confirm("Nave pronta para a decolagem. Aguardando confirmação") // alerta com botão de OK e CANCEL //

prompt ("Qual seu nome, piloto?")  // alerta com caixa de preenchimento // 





let spaceship = "FE Supernova"   // LET Funcionta para declarar uma vareavel permitindo alteração do valor //
console.log (spaceship)
spaceship = "FE Helmet"
console.log (spaceship)


const squad = "Estelar"   // CONST serve para declarar uma vareavel permitindo declarar o valor apenas uma vez //
console.log(squad)
squad = "Espacial"
console.log(squad)

var velocity = 80
console.log(velocity)
velocity = 25
console.log(velocity)

var noValue
console.log(noValue)

let departureConfirmation = confirm ("Nave pronta para decolar. Aguardando confirmação")
console.log(departureConfirmation)

let pilot = prompt ("Qual seu nome, piloto?")
console.log(pilot)


// Coleta de dados do usuário 

alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let name = prompt ("Qual o seu nome?")
let age = prompt ("Qual sua idade?")
let ageConfirmation = confirm("Confirme sua idade é " + age + " anos")

console.log (name, age, ageConfirmation)

alert("Nome: " + name + "\nIdade: " + age + "\nIdade confirmada: " + ageConfirmation)