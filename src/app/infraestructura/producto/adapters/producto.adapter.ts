import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "../../../../environments/environment";
import { IProductoAdapter } from "./iproducto.adapter";
import { inject } from "@angular/core";
import { ProductoEntity } from "../entities/producto.entity";

export class ProductoAdapter implements IProductoAdapter {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${ENVIRONMENT.apiUrl}/products`;
    
    consultar() {
        return this.http.get<ProductoEntity[]>(this.baseUrl);
    }
}