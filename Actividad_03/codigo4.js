class Persona {
    constructor(nombre, edad, genero) {
        this.value = {
            nombre: String(nombre),
            edad: String(edad),
            genero: String(genero)
        }
    }

    getInfo() {
        alert(
            `Nombre: ${this.nombre},
            \nEdad: ${this.edad},
            \nGénero: ${this.genero}`
        )
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.value = {
            curso: parseInt(curso),
            grupo: String(grupo)
        }
    }

    matricular(curso) {
        this.curso = curso
        alert(`${this.nombre} ha sido matriculado/a en el curso ${this.curso}`)
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero)
        this.value = {
            modulo: String(modulo),
            nivel: String(nivel)
        }
    }

    imparte(modulo, nivel) {
        this.modulo = modulo
        this.nivel = nivel
        alert(`El profesor/a ${this.nombre} imparte el módulo ${this.modulo} y tiene un nivel ${this.nivel}`)
    }
}

// Casos de prueba
const persona = new Persona("Pedro", 20, "masculino")
const estudiante = new Estudiante("Maria", 22, "femenino", 2, "B")
const profesor = new Profesor("Jesus", 32, "masculino", "matematicas", "alto")

persona.getInfo()

estudiante.getInfo()
estudiante.matricular(estudiante.curso)

profesor.getInfo()
profesor.imparte(profesor.modulo, profesor.nivel)