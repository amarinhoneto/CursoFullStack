

alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let name = prompt ("Qual o seu nome?")
let age = prompt ("Qual sua idade?")
let ageConfirmation = confirm("Confirme sua idade é " + age + " anos")

console.log (name, age, ageConfirmation)

alert("Nome: " + name + "\nIdade: " + age + "\nIdade confirmada: " + ageConfirmation)