import { inject,  Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/Product.repository';
import { CreateProductDTO } from '../../domain/dtos/products/create-product.dto';
import { UpdateProductDTO } from '../../domain/dtos/products/update-product.dto';
import { ProductEntity } from '../../domain/entities/Product.entity';
import { Result } from '../../domain/types/Result.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductRepository {
  override create(dto: CreateProductDTO): Promise<Result<ProductEntity, string>> {
    throw new Error('Method not implemented.');
  }
  override getById(id: number): Promise<Result<ProductEntity, string>> {
    throw new Error('Method not implemented.');
  }
  override update(dto: UpdateProductDTO): Promise<Result<ProductEntity, string>> {
    throw new Error('Method not implemented.');
  }
  override delete(id: number): Promise<Result<any, string>> {
    throw new Error('Method not implemented.');
  }
  override getAll(params: { [key: string]: any; }): Promise<Result<ProductEntity[], string>> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
   }


   private _url = environment.url;
   private _http = inject(HttpClient);

}
