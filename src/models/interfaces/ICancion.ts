import { IArtista } from "./IArtista"

export interface ICancion{
    id: number
    nombre: string
    duracion: number
    portada: string
    artista: IArtista

    reproducir(): void
    darDetalles(): string
    cambiarPortada(nuevaPortada: string): void
}
