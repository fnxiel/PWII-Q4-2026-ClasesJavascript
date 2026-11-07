import { IArtista } from "../interfaces/IArtista";

export class Artista implements IArtista {
    id: number;
    nombre: string;
    nacionalidad: string;
    edad?: number;

    constructor(id: number, nombre: string, nacionalidad: string) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

}