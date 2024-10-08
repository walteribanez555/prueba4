import { inject, Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/Product.repository';
import { CreateProductDTO } from '../../domain/dtos/products/create-product.dto';
import { UpdateProductDTO } from '../../domain/dtos/products/update-product.dto';
import { ProductEntity } from '../../domain/entities/Product.entity';
import { Result } from '../../domain/types/Result.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { firstValueFrom, map } from 'rxjs';
import { ProductDao, ProductsResponseDAO } from '../daos/products/Products.dao';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ProductRepository {
  override create(
    dto: CreateProductDTO
  ): Promise<Result<ProductEntity, string>> {
    return firstValueFrom(
      this._http.post(`${this._url}/add`, dto).pipe(
        map( (response) => {

          let result : Result<ProductEntity, string>;
          const [err, dto ] = ProductDao.fromObj(response);

          if(err) {
            result = {
              isSuccess : false,
              error : err as string,
            }
          }

          const [errEntity ,entity ]= ProductEntity.fromDAO(dto as ProductDao);

          if(errEntity) {
            result = {
              isSuccess : false,
              error : errEntity as unknown as string,
            }
          }

          result = {
            isSuccess : true,
            value : entity as ProductEntity
          }
          return result;

        })
      )
    )

  }
  override getById(id: number): Promise<Result<ProductEntity, string>> {
    return firstValueFrom(
      this._http.get(`${this._url}/${id}`).pipe(
        map( (response) => {

          let result : Result<ProductEntity, string>;
          const [err, dto ] = ProductDao.fromObj(response);

          if(err) {
            result = {
              isSuccess : false,
              error : err as string,
            }
          }

          const [errEntity ,entity ]= ProductEntity.fromDAO(dto as ProductDao);

          if(errEntity) {
            result = {
              isSuccess : false,
              error : errEntity as unknown as string,
            }
          }

          result = {
            isSuccess : true,
            value : entity as ProductEntity
          }
          return result;

        })
      )
    )
  }
  override update(
    dto: UpdateProductDTO
  ): Promise<Result<ProductEntity, string>> {
    return firstValueFrom(
      this._http.put(`${this._url}/${dto.id}`, {title: dto.title}).pipe(
        map( (response) => {

          let result : Result<ProductEntity, string>;
          const [err, dto ] = ProductDao.fromObj(response);

          if(err) {
            result = {
              isSuccess : false,
              error : err as string,
            }
          }

          const [errEntity ,entity ]= ProductEntity.fromDAO(dto as ProductDao);

          if(errEntity) {
            result = {
              isSuccess : false,
              error : errEntity as unknown as string,
            }
          }

          result = {
            isSuccess : true,
            value : entity as ProductEntity
          }
          return result;

        })
      )
    )
  }
  override delete(id: number): Promise<Result<any, string>> {
    return firstValueFrom(
      this._http.delete(`${this._url}/${id}`).pipe(
        map( (response) => {
          let result : Result<any, string>

          result = {
            isSuccess : true,
            value : 'Completed'
          }
          return result;

        })
      )
    )
  }
  override getAll(params: {
    [key: string]: any;
  }): Promise<Result<ProductEntity[], string>> {
    return firstValueFrom(
      this._http.get(this._url, { params }).pipe(
        map((response: any) => {

          let result: Result<ProductEntity[], string>;
          const [err, dao] = ProductsResponseDAO.fromObj(response);

          if (err) {
            result = {
              isSuccess: false,
              error: err as string,
            };
          }


          try {
            const products: ProductEntity[] = [];



            (dao as ProductsResponseDAO).products.forEach((p) => {
              const [err, entity] = ProductEntity.fromDAO(p);


              if (err) throw Error(err as unknown as string);

              products.push(entity as ProductEntity);
            });


            result = {
              isSuccess: true,
              value: products,
            };
          } catch (err) {
            result = {
              isSuccess: false,
              error: err as string,
            };
          }

          return result;
        })
      )
    );
  }

  constructor() {
    super();
  }

  private _url = environment.url;
  private _http = inject(HttpClient);
}
