import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductoModel } from "../models/producto.model";

@Injectable({ providedIn: 'root' })
export abstract class IProductoRepository {
    abstract consultar(): Observable<ProductoModel[]>;
}