// WHILE ( ENQUANTO ) - while repete a codigo ate que o valor degalarado seja false

let velocity = 50
let acceleration = 5

while (velocity <=100) {
    console.log ("Acelerando: Estamos a " + velocity + "km/s")
    velocity += acceleration // velocity = velocity + acceleration
}




let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
    if(constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
    }
    pos += 1
}