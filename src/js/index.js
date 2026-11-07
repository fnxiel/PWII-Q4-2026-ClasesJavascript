var colors = require('colors');
var {Persona} = require('./models/Persona');
var {Empleado} = require('./models/Empleado');
var {Planilla} = require('./models/Planilla');

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

const empleado = new Empleado(1, "Obi-Wan", "Kenobi", 35, "Stewjon", "Jedi Knight", 50)
const empleado2 = new Empleado(2, "Anakin", "Skywalker", 30, "Tatooine", "Jedi Knight", 60)
const empleado3 = new Empleado(3, "Yoda", "Master", 900, "Dagobah", "Jedi Master", 100)
const empleado4 = new Empleado(4, "Mace", "Windu", 50, "Haruun Kal", "Jedi Master", 80)

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

const planillaDocentes = new Planilla("Docentes")

console.log(planillaDocentes)

empleado.trabajar(8)
empleado.trabajar(10)
empleado.trabajar(3)
empleado.trabajar(5)
empleado.trabajar(8)
empleado.trabajar(8)

empleado2.trabajar(8)
empleado2.trabajar(10)
empleado2.trabajar(3)

empleado3.trabajar(5)
empleado3.trabajar(8)
empleado3.trabajar(8)

planillaDocentes.agregarEmpleado(empleado)
planillaDocentes.agregarEmpleado(empleado2)
planillaDocentes.agregarEmpleado(empleado3)

planillaDocentes.listarEmpleados()
planillaDocentes.buscarEmpleadoPorId(2)
planillaDocentes.buscarEmpleadoPorId(4)
planillaDocentes.buscarPorPuesto("Jedi Knight")
planillaDocentes.buscarPorPuesto("Puesto que no existe")

planillaDocentes.buscarEmpleadoPorId(2)
planillaDocentes.actualizarEmpleado(2, "Nuevo puesto", 150)
planillaDocentes.buscarEmpleadoPorId(2)

planillaDocentes.listarEmpleados()
//planillaDocentes.eliminarEmpleado(1)
planillaDocentes.listarEmpleados()

planillaDocentes.listarPlanillaPendientePago()
planillaDocentes.pagarPlanilla()
planillaDocentes.listarPlanillaPendientePago()
