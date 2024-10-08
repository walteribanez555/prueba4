import { Injectable } from '@angular/core';
import { ProductEntity } from '../../entities/Product.entity';
import { ProductRepository } from '../../repositories/Product.repository';

export interface GetProductUseCase {
  execute(id: number): Promise<ProductEntity>;
}

@Injectable({
  providedIn: 'root',
})
export class GetProductService implements GetProductUseCase {
  constructor(private repository: ProductRepository) {}
  async execute(id: number): Promise<ProductEntity> {
    const result = await this.repository.getById(id);
    if (!result.isSuccess) throw Error(result.error);

    return result.value;
  }
}
