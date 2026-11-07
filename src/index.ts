import { Artista } from "./models/clases/Artista";
import { Cancion } from "./models/clases/Cancion";
import { ListaReproduccion } from "./models/clases/ListaReproduccion";
import { IArtista } from "./models/interfaces/IArtista";
import { ICancion } from "./models/interfaces/ICancion";
import { IListaReproduccion } from "./models/interfaces/IListaReproduccion";

///--Tipos en typrescript
console.log("Hola mundo desde TypeScript")

var saludo = "Hola mundo"
var numero = 10

var nombre: string = "Luke"
var edad: number = 30

var direccion: string | null = null

direccion = "Calle falsa 123"
direccion = null

var estado: "Activo" | "Inactivo" = "Activo"

var idEstado: 1 | 2 | 3 | null

idEstado = 1
idEstado = 2
idEstado = 3
idEstado = null

//--Interfaces sin clases

// const cancion: ICancion = {
//     id: 1,
//     nombre: "Marcha imperial",
//     duracion: 500,
//     portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imperial_March.ogg/300px-Imperial_March.ogg.jpg",
//     artista: {
//         id: 1,
//         nombre: "John Williams",
//         nacionalidad: "Estadounidense"
//     },

//     reproducir: function(): void{
//         console.log("Reproduciendo la canción: " + this.nombre)
//     },

//     darDetalles: function(): string{
//         return `La canción ${this.nombre} tiene una duración de ${this.duracion} segundos`
//     },

//     cambiarPortada: function(nuevaPortada: string): void{
//         this.portada = nuevaPortada
//         console.log("Se cambió la portada de la canción a: " + this.portada)
//     }
// }

// const cancion2: ICancion = {
//     id: 0,
//     nombre: "",
//     duracion: 0,
//     portada: "",
//     artista: {
//         id: 0,
//         nombre: "",
//         nacionalidad: ""
//     },
//     reproducir: function (): void {
//         throw new Error("Function not implemented.")
//     },
//     darDetalles: function (): string {
//         throw new Error("Function not implemented.")
//     },
//     cambiarPortada: function (nuevaPortada: string): void {
//         throw new Error("Function not implemented.")
//     },
// }

// cancion.reproducir()
// console.log(cancion.darDetalles())
// cancion.cambiarPortada("Nueva portada")

// cancion2.id = 2
// cancion2.reproducir()

//Interfaces con clases

const artista: IArtista = new Artista(1, "John Williams", "Estadounidense")
const artista2: IArtista = new Artista(2, "Hans Zimmer", "Alemán")

const cancion: ICancion = new Cancion(1, "Marcha imperial", 500, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imperial_March.ogg/300px-Imperial_March.ogg.jpg", artista)
const cancion2: ICancion = new Cancion(2, "Time", 600, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Inception_%28soundtrack%29_-_Time.ogg/300px-Inception_%28soundtrack%29_-_Time.ogg.jpg", artista2)

cancion.reproducir()
console.log(cancion.darDetalles())
cancion.cambiarPortada("Nueva portada")

cancion2.reproducir()
console.log(cancion2.darDetalles())
cancion2.cambiarPortada("Nueva portada 2")

const listaReproduccion: IListaReproduccion = new ListaReproduccion(1, "Mi lista de reproducción")

listaReproduccion.agregarCancion(cancion)
listaReproduccion.agregarCancion(cancion2)

listaReproduccion.reproducirLista()

listaReproduccion.eliminarCancion(cancion)

listaReproduccion.reproducirLista() 