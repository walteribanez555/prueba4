import { Injectable } from '@angular/core';
import { UpdateProductDTO } from '../../dtos/products/update-product.dto';
import { ProductEntity } from '../../entities/Product.entity';
import { ProductRepository } from '../../repositories/Product.repository';


export interface UpdateProductUseCase {
   execute( dto : UpdateProductDTO) : Promise<ProductEntity>;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService implements UpdateProductUseCase {

  constructor(
    private repository  : ProductRepository,
  ) { }
  async execute(dto: UpdateProductDTO): Promise<ProductEntity> {
    const result = await this.repository.update(dto);

    if(!result.isSuccess) throw Error(result.error);

    return result.value;

  }

}
