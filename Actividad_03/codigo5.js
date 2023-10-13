const Trabajador = {
    create: function (id, nombre, apellidos, fecha_nacimiento) {
        return {
            value: {
                id: String(id),
                nombre: String(nombre),
                apellidos: String(apellidos),
                fecha_nacimiento: moment(fecha_nacimiento, 'DD/MM/YYYY')
            },

            concentrarse: function () {
                this.nombre = nombre
                alert(`¡Concentrate, ${nombre}!`)
            }
        }
    }
}

const Ceo = {
    create: function (id, nombre, apellidos, fecha_nacimiento, jefes_asignados) {
        const trabajador = Trabajador.create(id, nombre, apellidos, fecha_nacimiento)
        return {
            ...trabajador,
            jefes_asignados: String(jefes_asignados),

            viajar: function () {
                alert("Viaje programado")
            },

            anyadir_jefe: function () {
                alert("Jefe añadido")
            },

            dirigir_jefes: function () {
                alert("¡Jefes, a trabajar!")
            }
        }
    }
}

const Jefe = {
    create: function (id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        const trabajador = Trabajador.create(id, nombre, apellidos, fecha_nacimiento)
        return {
            ...trabajador,
            value: {
                dpto_responsable: String(dpto_responsable),
                equipo: []
            },

            anyadir_al_equipo: function () {
                alert("Programador añadido al equipo")
            },

            reunirse_con_equipo: function () {
                alert("¡Equipo, reunión!")
            }
        }
    }
}

const Programador = {
    create: function (id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        const trabajador = Trabajador.create(id, nombre, apellidos, fecha_nacimiento)
        return {
            ...trabajador,
            value: [String(titulacion), String(experiencia)],

            programar: function () {
                this.nombre = nombre
                alert(`¡A programar, ${nombre}!`)
            }
        }
    }
}

const ceo = Ceo.create(1, "Carlos", "Medina González", "14/02/1984", 10)
const programador1 = Programador.create(3, "Diego", "Pérez Sánchez", "28/05/1992", "Informático", 4)
const programador2 = Programador.create(3, "Marta", "Jiménez Fernández", "15/01/1996", "Informático", 2)
const jefe = Jefe.create(2, "Pedro", "Gutierrez Alonso", "08/07/1970", 1, [programador1, programador2])

ceo.concentrarse()
jefe.concentrarse()
programador1.concentrarse()
programador2.concentrarse()

ceo.viajar()
ceo.anyadir_jefe()
ceo.dirigir_jefes()

jefe.anyadir_al_equipo()
jefe.reunirse_con_equipo()

programador1.programar()
programador2.programar()