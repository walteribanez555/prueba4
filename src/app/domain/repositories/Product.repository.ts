import { CreateProductDTO } from "../dtos/products/create-product.dto";
import { UpdateProductDTO } from "../dtos/products/update-product.dto";
import { ProductEntity } from "../entities/Product.entity";
import { Result } from "../types/Result.type";

export abstract class ProductRepository {

  abstract create( dto : CreateProductDTO) : Promise<Result<ProductEntity , string>>
  abstract getById ( id : number) : Promise<Result<ProductEntity, string>>
  abstract update( dto : UpdateProductDTO) : Promise<Result<ProductEntity, string>>
  abstract delete( id : number) : Promise<Result<any, string>>
  abstract getAll(params : {[key:string] : any}) : Promise<Result<ProductEntity[], string>>


}
