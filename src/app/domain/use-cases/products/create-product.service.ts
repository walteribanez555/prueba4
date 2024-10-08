import { Injectable } from '@angular/core';
import { CreateProductDTO } from '../../dtos/products/create-product.dto';
import { ProductEntity } from '../../entities/Product.entity';
import { ProductRepository } from '../../repositories/Product.repository';


export interface CreateProductUseCase {
  execute( dto : CreateProductDTO) : Promise<ProductEntity>
}

@Injectable({
  providedIn: 'root'
})
export class CreateProductService implements CreateProductUseCase {

  constructor(
    private repository : ProductRepository,
  ) { }
  async execute(dto: CreateProductDTO): Promise<ProductEntity> {
    const result = await this.repository.create(dto);

    if(!result.isSuccess) throw Error(result.error);

    return result.value
  }

}
