
class Planilla{
    nombre
    empleados

    constructor(nombre){
        this.nombre = nombre
        this.empleados = []
    }

    //Metodos
    //CRUD
    //Create
    agregarEmpleado(empleado){
        console.log(`Agregando empleado ${empleado.nombreCompleto} a la planilla ${this.nombre}`)
        this.empleados.push(empleado)
    }

    //Read
    listarEmpleados(){
        console.log(`Listado de empleados de la planilla ${this.nombre}`)
        //Select * from empleados

        // console.log(this.empleados)

        // // Ciclo for
        // for (let i = 0; i < this.empleados.length; i++) {
        //     const empleado = this.empleados[i]
        //     console.log(`Empleado ${i+1}: ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`)   
        // }

        // For each
        // console.log("Listado de empleados con forEach y funcion flecha inline")
        this.empleados.forEach((empleado, i) => console.log(`Empleado ${i+1}: ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`))

        // Map
        // this.empleados.map((empleado, i) => console.log(`Empleado ${i+1}: ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`))

        // const resultadoForEach = this.empleados.forEach(empleado => empleado.id * 10)
        //const resultadoMap = this.empleados.map(empleado => empleado.id * 10)

        // console.log(resultadoForEach)
        // console.log(resultadoMap)
    }

    //Select * from empleados where id = parametro
    buscarEmpleadoPorId(id){
        const empleadoEncontrado = this.empleados.find(empleado => empleado.id === id)
        if(empleadoEncontrado){
            console.log(`Empleado encontrado con id ${id}: ${empleadoEncontrado.nombreCompleto} - Puesto: ${empleadoEncontrado.puesto} - Salario por hora: ${empleadoEncontrado.salarioHora} - Pendiente de pago: ${empleadoEncontrado.pendientePago}`)
        }else{
            console.log(`Empleado con id ${id} no encontrado`)
        }
    }

    //Select * from empleados where puesto = parametro
    buscarPorPuesto(puesto){
        const empleadosEncontrados = this.empleados.filter(empleado => empleado.puesto === puesto)
        if(empleadosEncontrados.length > 0){
            console.log(`Empleados encontrados con puesto ${puesto}:`)
            empleadosEncontrados.forEach((empleado, i) => console.log(`Empleado ${i+1}: ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`))
        }else{
            console.log(`No se encontraron empleados con puesto ${puesto}`)
        }
    }

    //Update
    actualizarEmpleado(id, nuevoPuesto, nuevoSalarioHora){
        const empleadoEncontrado = this.empleados.find(empleado => empleado.id === id)
        if(empleadoEncontrado){
            empleadoEncontrado.puesto = nuevoPuesto
            empleadoEncontrado.salarioHora = nuevoSalarioHora
            console.log(`Empleado con id ${id} actualizado: ${empleadoEncontrado.nombreCompleto} - Puesto: ${empleadoEncontrado.puesto} - Salario por hora: ${empleadoEncontrado.salarioHora} - Pendiente de pago: ${empleadoEncontrado.pendientePago}`)
        }else{
            console.log(`Empleado con id ${id} no encontrado`)
        }
    }
    
    //Delete
    eliminarEmpleado(id){
        const empleadoEncontrado = this.empleados.find(empleado => empleado.id === id)

        if(empleadoEncontrado){
            this.empleados = this.empleados.filter(empleado => empleado.id !== id)
            console.log(`Empleado con id ${id} eliminado`)
        }else{
            console.log(`Empleado con id ${id} no encontrado`)
        }
    }

    pagarPlanilla(){
        console.log("-----Cierre del mes------".bgRed)
        console.log(`---Pagando planilla ${this.nombre}---`.bgGreen)
        this.empleados.forEach(empleado => {
            empleado.cobrar()
        })
    }

    listarPlanillaPendientePago(){
        console.log(`Listado de empleados de la planilla ${this.nombre} con pendiente de pago`.bgBlue)

        const pendientesPago = this.empleados.filter(empleado => empleado.pendientePago > 0)
        if  (pendientesPago.length === 0){
            console.log(`No hay empleados con pendiente de pago en la planilla ${this.nombre}`.bgYellow)
            return
        }

        this.empleados.forEach((empleado, i) => {
            if(empleado.pendientePago > 0){
                console.log(`Empleado ${i+1}: ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`)
            }
        })

    }
}

module.exports = { Planilla }

// //Referenccias

// function imprimirEmpleado(empleado){
//     //${i+1}
//     console.log(`Empleado : ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`)   
// }

// const imprimirEmpleadoFF = (empleado) => console.log(`Empleado : ${empleado.nombreCompleto} - Puesto: ${empleado.puesto} - Salario por hora: ${empleado.salarioHora} - Pendiente de pago: ${empleado.pendientePago}`)

// function funcionConReturn(){
//     return "Hola mundo"
// }

// const functionConReturnFF = () => "Hola mundo"

// console.log("Listado de empleados con forEach")
// this.empleados.forEach(imprimirEmpleado)
// console.log("Listado de empleados con forEach y funcion flecha")
// this.empleados.forEach(imprimirEmpleadoFF)