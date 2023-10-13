class Monedero {
    constructor(nombre, billetes5, billetes10, billetes20) {
        this.nombre = nombre
        this.billetes5 = billetes5
        this.billetes10 = billetes10
        this.billetes20 = billetes20
    }

    get Nombre() {
        return this.nombre
    }

    get Billetes5() {
        return this.billetes5
    }

    set Billetes5(value) {
        this.billetes5 = value
    }

    get Billetes10() {
        return this.billetes10
    }

    set Billetes10(value) {
        this.billetes10 = value
    }

    get Billetes20() {
        return this.billetes20
    }

    set Billetes20(value) {
        this.billetes20 = value
    }

    // Método para calcular el total de dinero en el monedero
    calcularTotal() {
        return (this.billetes5 * 5) + (this.billetes10 * 10) + (this.billetes20 * 20)
    }

    // Función para seleccionar el monedero con más dinero
    static monederoMasDinero(monederos) {
        if (monederos.length === 0) {
            return "Ningún monedero disponible"
        }

        let maxDinero = monederos[0].calcularTotal()
        let monederoSeleccionado = monederos[0]

        for (let i = 1; i < monederos.length; i ++) {
            const dineroActual = monederos[i].calcularTotal()
            if (dineroActual > maxDinero) {
                maxDinero = dineroActual
                monederoSeleccionado = monederos[i]
            } 
            else if (dineroActual === maxDinero) {
                return "Cualquiera"
            }
        }

        return monederoSeleccionado.Nombre
    }
}

const monedero1 = new Monedero("Amigo1", 2, 3, 2)
const monedero2 = new Monedero("Amigo2", 4, 2, 3)
const monedero3 = new Monedero("Amigo3", 3, 4, 5)
const monedero4 = new Monedero("Amigo4", 5, 2, 6)
const monedero5 = new Monedero("Amigo5", 6, 0, 3)
const monedero6 = new Monedero("Amigo6", 4, 2, 3)
const monedero7 = new Monedero("Amigo7", 0, 1, 5)

const monederos = [monedero1, monedero2, monedero3, monedero4, monedero5, monedero6, monedero7]

const monederoMasDinero = Monedero.monederoMasDinero(monederos)
alert(`El monedero con más dinero es: ${monederoMasDinero}`)