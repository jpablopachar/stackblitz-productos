import { Observable } from "rxjs";
import { ProductoModel } from "../../../dominio/producto/models/producto.model";

export abstract class IProductoInteractor {
    abstract consultar(): Observable<ProductoModel[]>;
}