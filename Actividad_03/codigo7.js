class CifradoCesar {
    constructor(posiciones) {
        this.posiciones = posiciones
    }

    cifrar(texto) {
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        texto = texto.toUpperCase()
            let textoCifrado = ""

            for (let i = 0; i < texto.length; i ++) {
                if (alfabeto.includes(texto[i])) {
                    const indiceActual = alfabeto.indexOf(texto[i])
                    const indiceCifrado = (indiceActual + this.posiciones) % alfabeto.length
                    textoCifrado += alfabeto[indiceCifrado]
                }
            }

        return textoCifrado
    }

    descifrar(textoCifrado) {
        this.posiciones = -this.posiciones
        const textoDescifrado = this.cifrar(textoCifrado)
        return textoDescifrado
    }
}

const cifrado = new CifradoCesar(5)
const textoCifrado = cifrado.cifrar("DWEC")
alert(textoCifrado)
const textoDescifrado = cifrado.descifrar(textoCifrado)
alert(textoDescifrado)