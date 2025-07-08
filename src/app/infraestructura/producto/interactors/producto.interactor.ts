import { inject } from "@angular/core";
import { IProductoInteractor } from "./iproducto.interactor";
import { GetConsultaTodoProductoUseCase } from "../../../dominio/producto/usecases/get-consulta-todo.producto.usecase";

export class productoInteractor implements IProductoInteractor {
    private readonly getConsultaTodoProductoUseCase = inject(GetConsultaTodoProductoUseCase);

    consultar() {
        return this.getConsultaTodoProductoUseCase.execute();
    }
}