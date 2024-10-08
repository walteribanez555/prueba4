import { Injectable } from '@angular/core';
import { ProductEntity } from '../../entities/Product.entity';
import { ProductRepository } from '../../repositories/Product.repository';

export interface GetProductsUseCase {
   execute(params : {[key:string]: any}): Promise<ProductEntity[]>
}

@Injectable({
  providedIn: 'root'
})
export class GetProductsService implements GetProductsUseCase {


  constructor(
    private repository : ProductRepository
  ) { }
  async execute(params: { [key: string]: any; }): Promise<ProductEntity[]> {
    const result = await this.repository.getAll(params);

    if(!result.isSuccess) throw Error(result.error);

    return result.value;

  }

}
