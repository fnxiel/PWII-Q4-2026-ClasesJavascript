import { ICancion } from "./ICancion"

export interface IListaReproduccion{
    id: number
    nombre: string
    canciones: ICancion[]

    agregarCancion(cancion: ICancion): void
    eliminarCancion(cancion: ICancion): void
    reproducirLista(): void
}