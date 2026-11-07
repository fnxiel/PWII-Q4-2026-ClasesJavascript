//Clase
class Persona{
    //Atributos o atributos
    nombre
    apellido
    edad
    direccion
    fechaRegistro
    estado

    //Metodos o funciones
    //Constructor
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaRegistro = new Date()
        this.estado = "Activo"
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludar(){
        //Plantillas de string

        //Interpolacion
        console.log(`Hola. Mi nombre es ${this.nombre} ${this.apellido}.`)

        //console.log("Hola, mucho gusto." + " Mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Vivo en " + this.direccion)
    }

    presentarse(nombre){
        console.log(`Mucho gusto, ${nombre}. Tengo ${this.edad} años. Vivo en ${this.direccion}`)
    }

    cumplirAnios(){
        this.edad += 1
        console.log(`Acabo de cumplir ${this.edad} años. Feliz cumpleaños para mi!`)
    }
}



module.exports = { Persona }