import { inject, Injectable } from "@angular/core";
import { IProductoRepository } from "../../../dominio/producto/repositories/iproducto-repository";
import { IProductoAdapter } from "../../../infraestructura/producto/adapters/iproducto.adapter";
import { map, Observable } from "rxjs";
import { ProductoModel } from "../../../dominio/producto/models/producto.model";

@Injectable({ providedIn: 'root' })
export class ProductoService implements IProductoRepository {
    private readonly productoAdapter = inject(IProductoAdapter);

    public consultar(): Observable<ProductoModel[]> {
        return this.productoAdapter.consultar().pipe(
            map(productos => productos.map((producto) => {
                return {
                    codigo: producto.id,
                    titulo: producto.title,
                    precio: producto.price,
                    descripcion: producto.description,
                    categoria: producto.category,
                    imagen: producto.image,
                    puntaje: {
                        puntaje: producto.rating?.rate || 0,
                        valor: producto.rating?.count || 0
                    }
                }
            }))
        )
    }
}