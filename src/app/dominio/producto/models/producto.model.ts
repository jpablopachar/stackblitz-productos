import { PuntajeModel } from "./puntaje.model";

export class ProductoModel {
    constructor(
        public codigo: number,
        public titulo: string,
        public precio: number,
        public descripcion: string,
        public categoria: string,
        public imagen: string,
        public puntaje: PuntajeModel,
    ) {}
}