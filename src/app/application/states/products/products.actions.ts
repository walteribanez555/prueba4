import { CreateProductDTO } from "../../../domain/dtos/products/create-product.dto";
import { UpdateProductDTO } from "../../../domain/dtos/products/update-product.dto";
import { ProductEntity } from "../../../domain/entities/Product.entity";
import { StateCallback } from "../../interfaces/StateCallback.interface";

export namespace ProductsActions {

  export class Get{
    static readonly type = '[Products] Get item';
    constructor( readonlyid : number, readonly callback? :StateCallback<ProductEntity, string>){}
  }

  export class GetAll {
     static readonly type = '[Products] Get All Items';
     constructor(readonly params : {[key:string] : any},readonly callback? :StateCallback<ProductEntity[], string>) {}
  }

  export class  Update{
    static readonly type ='[Products] Update an item';
    constructor( readonly dto : UpdateProductDTO,readonly callback? :StateCallback<ProductEntity, string>){}
  }

  export class Delete {
    static readonly type = '[Products] Delete an item';
    constructor( readonly id : number, readonly callback? : StateCallback<any, string>){}
  }

  export class Create{
    static readonly type = '[Products] Create an Item';
    constructor( readonly dto : CreateProductDTO,readonly callback? : StateCallback<ProductEntity, string>){}
  }

}
