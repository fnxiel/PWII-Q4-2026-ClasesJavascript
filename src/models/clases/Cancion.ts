import { IArtista } from "../interfaces/IArtista";
import { ICancion } from "../interfaces/ICancion";

export class Cancion implements ICancion{
    id: number;
    nombre: string;
    duracion: number;
    portada: string;
    artista: IArtista;

    constructor(id: number, nombre: string, duracion: number, portada: string, artista: IArtista) {
        this.id = id;
        this.nombre = nombre;
        this.duracion = duracion;
        this.portada = portada;
        this.artista = artista;
    }

    reproducir(): void {
        console.log("Reproduciendo la canción: " + this.nombre)
    }
    
    darDetalles(): string {
        return `La canción ${this.nombre} tiene una duración de ${this.duracion} segundos`
    }

    cambiarPortada(nuevaPortada: string): void {
        this.portada = nuevaPortada
        console.log("Se cambió la portada de la canción a: " + this.portada)
    }

}