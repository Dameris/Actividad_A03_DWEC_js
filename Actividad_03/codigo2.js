let dado1 = Math.floor(Math.random() * 6) + 1
let dado2 = Math.floor(Math.random() * 6) + 1
let sumaDados = dado1 + dado2

let veces1 = 0
let veces2 = 0
let veces3 = 0
let veces4 = 0
let veces5 = 0
let veces6 = 0
let veces7 = 0
let veces8 = 0
let veces9 = 0
let veces10 = 0
let veces11 = 0
let veces12 = 0

for (i = 0; i < 36000; i ++) {
    let dado1 = Math.floor(Math.random() * 6) + 1
    let dado2 = Math.floor(Math.random() * 6) + 1
    let sumaDados = dado1 + dado2

    switch(sumaDados) {
        case 1:
            veces1 ++
            break

        case 2:
            veces2 ++
            break

        case 3:
            veces3 ++
            break

        case 4:
            veces4 ++
            break

        case 5:
            veces5 ++
            break

        case 6:
            veces6 ++
            break

        case 7:
            veces7 ++
            break

        case 8:
            veces8 ++
            break

        case 9:
            veces9 ++
            break

        case 10:
            veces10 ++
            break

        case 11:
            veces11 ++
            break

        case 12:
            veces12 ++
            break

        default:
            break
    }
}

alert(
    "Resultados:\n" + 
    "1: " + veces1 + " veces\n" + 
    "2: " + veces2 + " veces\n" + 
    "3: " + veces3 + " veces\n" + 
    "4: " + veces4 + " veces\n" +
    "5: " + veces5 + " veces\n" +
    "6: " + veces6 + " veces\n" +
    "7: " + veces7 + " veces\n" +
    "8: " + veces8 + " veces\n" +
    "9: " + veces9 + " veces\n" +
    "10: " + veces10 + " veces\n" +
    "11: " + veces11 + " veces\n" +
    "12: " + veces12 + " veces")