let numVeces = parseInt(prompt("Introduce el número de veces a repetir 'bauuuba':"))

if (isNaN(numVeces) || numVeces <= 0 || numVeces === "") {
    alert("Introduce un número válido");
} 
else {
    function repetirPalabra(numVeces) {
        let cadena = "bauuuba"
        let resultado = ""

        for (i = 0; i < numVeces; i++) {
            resultado += cadena + " "
        }

        alert(resultado);
    }

    repetirPalabra(numVeces)
}