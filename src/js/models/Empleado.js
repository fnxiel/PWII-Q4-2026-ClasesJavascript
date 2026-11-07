const { Persona } = require('./Persona');

class Empleado extends Persona {
    id
    puesto
    salarioHora
    pendientePago
    fechaContratacion

    constructor(id, nombre, apellido, edad, direccion, puesto, salarioHora) {
        super(nombre, apellido, edad, direccion)
        this.id = id
        this.puesto = puesto
        this.salarioHora = salarioHora
        this.pendientePago = 0
        this.fechaContratacion = new Date()
    }

    trabajar(horas) {
        const pago = horas * this.salarioHora
        this.pendientePago += pago
        console.log(`${this.nombreCompleto} ha trabajado ${horas} horas y ha ganado ${pago} lempiras. Total pendiente de pago: ${this.pendientePago}`)
    }

    cobrar() {
        console.log(`${this.nombreCompleto} ha cobrado ${this.pendientePago} lempiras. Gracias por su pago.`)
        this.pendientePago = 0
    }
}

module.exports = { Empleado }