import { inject, Injectable } from "@angular/core";
import { IProductoRepository } from "../repositories/iproducto-repository";
import { Observable } from "rxjs";
import { ProductoModel } from "../models/producto.model";

@Injectable({ providedIn: 'root' })
export class GetConsultaTodoProductoUseCase {
    private readonly productoRepository = inject(IProductoRepository);

    consultar(): Observable<ProductoModel[]> {
        return this.productoRepository.consultar();
    }
}