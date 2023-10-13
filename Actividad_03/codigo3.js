let matriz = [
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9]
]

let matrizPlana = []

for (i = 0; i < matriz.length; i ++) {
    for (j = 0; j < matriz[i].length; j ++) {
        matrizPlana.push(matriz[i][j])
    }
}

console.log(matriz)
console.log(matrizPlana)

let matrizPlanaOrdenada = []

while (matrizPlana.length > 0) {
    let numeroPequenyo = Math.min(...matrizPlana)
    matrizPlanaOrdenada.push(" " + numeroPequenyo)
    let indiceAEliminar = matrizPlana.indexOf(numeroPequenyo)
    
    if (indiceAEliminar !== -1) {
        matrizPlana.splice(indiceAEliminar, 1)
    }
}

alert(matrizPlanaOrdenada)