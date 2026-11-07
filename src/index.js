var colors = require('colors');
var {Persona} = require('./models/Persona');
var {Empleado} = require('./models/Empleado');
var Configuracion = require('./config.js');

console.log(Configuracion.NOMBRE_SISTEMA.green);
console.log(Configuracion.VERSION_SISTEMA.bgBlue);

//POO Programacion Orientada a Objetos

const persona = new Persona("Luke", "Skywalker", 25, "Tatooine")
const persona2 = new Persona("Leia", "Organa", 28, "Alderaan")
const persona3 = new Persona("Han", "Solo", 30, "Corellia")
const persona4 = new Persona("Chewbacca", "Wookiee", 200, "Kashyyyk")

persona.saludar()
persona.presentarse(persona2.nombre)
persona.cumplirAnios()
persona.cumplirAnios()
persona.cumplirAnios()
persona.cumplirAnios()
persona2.saludar()
persona2.presentarse(persona.nombre)

console.log(persona);
console.log(persona2);
console.log(persona3);
console.log(persona4);

const empleado = new Empleado("Obi-Wan", "Kenobi", 35, "Stewjon", "Jedi Knight", 50)

empleado.saludar()
empleado.trabajar(8)
empleado.trabajar(10)
empleado.trabajar(3)
empleado.trabajar(5)
empleado.trabajar(8)
empleado.trabajar(8)
empleado.cobrar()
empleado.trabajar(8)
empleado.trabajar(8)
empleado.cobrar()

console.log(empleado.nombreCompleto)