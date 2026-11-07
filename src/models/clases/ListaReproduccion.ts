import { ICancion } from "../interfaces/ICancion";
import { IListaReproduccion } from "../interfaces/IListaReproduccion";

export class ListaReproduccion implements IListaReproduccion {
    id: number;
    nombre: string;
    canciones: ICancion[];

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
        this.canciones = [];
    }

    agregarCancion(cancion: ICancion): void {
    console.log("Agregando la canción: " + cancion.nombre + " a la lista de reproducción: " + this.nombre);
       this.canciones.push(cancion);
    }
    eliminarCancion(cancion: ICancion): void {
        console.log("Eliminando la canción: " + cancion.nombre + " de la lista de reproducción: " + this.nombre);
        this.canciones = this.canciones.filter(c => c.id !== cancion.id);
    }
    reproducirLista(): void {
        console.log("Reproduciendo la lista de reproducción: " + this.nombre);
        this.canciones.forEach(cancion => cancion.reproducir());
    }
}