import { Observable } from "rxjs";
import { ProductoEntity } from "../entities/producto.entity";

export abstract class IProductoAdapter {
    abstract consultar(): Observable<ProductoEntity[]>;
}