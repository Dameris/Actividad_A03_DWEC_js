function calcularExpresion(expresion) {
    try {
        // Utilizamos eval() para evaluar la expresión
        const resultado = eval(expresion)

        if (isNaN(resultado)) {
            return "Expresión no válida"
        } 
        else {
            return resultado
        }
    } 
    catch (error) {
        return "Expresión no válida"
    }
}

const expresion1 = "2*5-3"
const resultado1 = calcularExpresion(expresion1)
alert(`${expresion1}= ${resultado1}`)

const expresion2 = "(7*7*7)+(3-1)*8"
const resultado2 = calcularExpresion(expresion2)
alert(`${expresion2}= ${resultado2}`)

const expresion3 = "4-2"
const resultado3 = calcularExpresion(expresion3)
alert(`${expresion3}= ${resultado3}`)