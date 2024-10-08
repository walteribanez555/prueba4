import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductsSelectors } from '../states/products/products.selectors';
import { ProductsActions } from '../states/products/products.actions';
import { CreateProductDTO } from '../../domain/dtos/products/create-product.dto';
import { StateCallback } from '../interfaces/StateCallback.interface';
import { ProductEntity } from '../../domain/entities/Product.entity';
import { UpdateProductDTO } from '../../domain/dtos/products/update-product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {

  private _store = inject(Store);


  public readonly products = this._store.selectSignal(ProductsSelectors.getProducts);

  public readonly productById = this._store.selectSignal(ProductsSelectors.getProductById);

  public readonly status = this._store.selectSignal(ProductsSelectors.getStatusLoading);



  constructor() {
    this._store.dispatch(new ProductsActions.GetAll({}, {
      onComplete : () => {
      },
      onError: (error) => {
        console.log(error)

      },
      onResult : (result) => {
      },
      onLoading : () => {
        console.log("Cargando");
      }
    }))
  }


  create( dto : CreateProductDTO, callback? : StateCallback<ProductEntity, string>) {
    this._store.dispatch(new ProductsActions.Create(dto, callback));
  }

  get( id: number, callback? : StateCallback<ProductEntity, string>) {
    this._store.dispatch(new ProductsActions.Get(id, callback));
  }

  getAll( params : {[key:string] : any} , callback? : StateCallback<ProductEntity[], string>){
    this._store.dispatch(new ProductsActions.GetAll(params, callback));
  }

  update( dto : UpdateProductDTO, callback? : StateCallback<ProductEntity, string>){
    this._store.dispatch(new ProductsActions.Update(dto , callback));
  }

  delete( id : number, callback? :StateCallback<any, string>){
    this._store.dispatch(new ProductsActions.Delete(id, callback));
  }


}
