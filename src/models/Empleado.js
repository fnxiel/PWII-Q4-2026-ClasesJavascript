const { Persona } = require('./Persona');

class Empleado extends Persona {
    puesto
    salarioHora
    pendientePago
    fechaContratacion

    constructor(nombre, apellido, edad, direccion, puesto, salarioHora) {
        super(nombre, apellido, edad, direccion)
        this.puesto = puesto
        this.salarioHora = salarioHora
        this.pendientePago = 0
        this.fechaContratacion = new Date()
    }

    trabajar(horas) {
        const pago = horas * this.salarioHora
        this.pendientePago += pago
        console.log(`He trabajado ${horas} horas y he ganado ${pago} lempiras. Total pendiente de pago: ${this.pendientePago}`)
    }

    cobrar() {
        console.log(`He cobrado ${this.pendientePago} lempiras. Gracias por su pago.`)
        this.pendientePago = 0
    }
}

module.exports = { Empleado }