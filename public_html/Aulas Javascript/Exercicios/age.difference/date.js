alert ("A seguir vamos pedir as informações da pessoa mais velha e mais nova")

let olderName = prompt ("Qual o nome da pessoa mais velha?")
let olderAge = prompt ("Qual a idade da pessoa mais velha?")
let newestName = prompt ("Qual o nome da pessoa mais nova?")
let newestAge = prompt ("Qual a idade da pessoa mais nova?")

let differenceAge = olderAge - newestAge 


alert(
    "Dados da pessoa mais velha:" + 
    "\nNome: " + olderName +   
    "\nIdade: " + olderAge + 
    "\n\nDados da possoa mais nova:" + 
    "\nNome: " + newestName + 
    "\nIdade: " + newestAge + 
    "\n\nDiferença de idade é de " + differenceAge + " anos."
)