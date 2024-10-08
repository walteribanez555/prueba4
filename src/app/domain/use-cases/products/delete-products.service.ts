import { Injectable } from '@angular/core';
import { ProductRepository } from '../../repositories/Product.repository';


export interface DeleteProductUseCase {
  execute( id : number) : Promise<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DeleteProductsService implements DeleteProductUseCase {

  constructor(
    private repository : ProductRepository
  ) { }
  async execute(id: number): Promise<any> {
      const result = await this.repository.delete(id);

      if(!result.isSuccess) throw Error(result.error);

      return result.value;
  }

}
