import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext, Actions } from '@ngxs/store';
import { ProductEntity } from '../../../domain/entities/Product.entity';
import { StatusAction } from '../../enums/StatusAction.enum';
import { ProductsActions } from './products.actions';
import { CreateProductService } from '../../../domain/use-cases/products/create-product.service';
import { UpdateProductService } from '../../../domain/use-cases/products/update-product.service';
import { DeleteProductsService } from '../../../domain/use-cases/products/delete-products.service';
import { GetProductService } from '../../../domain/use-cases/products/get-product.service';
import { GetProductsService } from '../../../domain/use-cases/products/get-products.service';

export interface ProductsStateModel {
  products : ProductEntity[],
  productById :  ProductEntity | null,
  status : StatusAction
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    products : [],
    productById : null,
    status : StatusAction.INITIAL
  }
})
@Injectable()
export class ProductsState {


  private createProductUseCase = inject(CreateProductService);
  private updateProductUseCase = inject(UpdateProductService);
  private deleteProductUseCase = inject(DeleteProductsService);
  private getProductUseCase = inject(GetProductService);
  private getProductsUseCase = inject(GetProductsService);



  @Action(ProductsActions.Create)
  async create(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Create
  ){
    ctx.patchState({
      status : StatusAction.LOADING
    });

    action.callback?.onLoading ? action.callback.onLoading() : null;

    try{

      const entity = await this.createProductUseCase.execute(action.dto);

      ctx.patchState({
        products : [...ctx.getState().products, entity]
      })

      action.callback?.onResult ? action.callback.onResult(entity) : null;

    }catch( err) {
      action.callback?.onError ? action.callback.onError(err as string) : null;
    }

    ctx.patchState({
      status : StatusAction.INITIAL
    });

    action.callback?.onComplete ? action.callback.onComplete() : null;


  }

  @Action(ProductsActions.Delete)
  async delete(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Delete
  ){
    ctx.patchState({
      status : StatusAction.LOADING
    });

    action.callback?.onLoading ? action.callback.onLoading() : null;

    try{


      await this.deleteProductUseCase.execute(action.id);

      ctx.patchState({
        products : ctx.getState().products.filter( p => p.id != action.id)
      })

      action.callback?.onResult ? action.callback.onResult("Completed") : null;

    }catch( err) {
      action.callback?.onError ? action.callback.onError(err as string) : null;
    }

    ctx.patchState({
      status : StatusAction.INITIAL
    });

    action.callback?.onComplete ? action.callback.onComplete() : null;

  }

  @Action(ProductsActions.Get)
  async get(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Get
  ){
    ctx.patchState({
      status : StatusAction.LOADING
    });

    action.callback?.onLoading ? action.callback.onLoading() : null;

    try{

      const entity = await this.getProductUseCase.execute(action.id);

      ctx.patchState({
        productById : entity
      });


      action.callback?.onResult ? action.callback.onResult(entity) : null;



    }catch( err) {
      action.callback?.onError ? action.callback.onError(err as string) : null;
    }

    ctx.patchState({
      status : StatusAction.INITIAL
    });

    action.callback?.onComplete ? action.callback.onComplete() : null;

  }

  @Action(ProductsActions.GetAll)
  async getAll(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.GetAll
  ){
    ctx.patchState({
      status : StatusAction.LOADING
    });

    action.callback?.onLoading ? action.callback.onLoading() : null;

    try{

      const products = await this.getProductsUseCase.execute(action.params);

      ctx.patchState({
        products
      });


      action.callback?.onResult ? action.callback.onResult(products) : null



    }catch( err) {
      action.callback?.onError ? action.callback.onError(err as string) : null;


    }

    ctx.patchState({
      status : StatusAction.INITIAL
    });

    action.callback?.onComplete ? action.callback.onComplete() : null;

  }

  @Action(ProductsActions.Update)
  async update(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Update
  ){

    ctx.patchState({
      status : StatusAction.LOADING
    });

    action.callback?.onLoading ? action.callback.onLoading() : null;

    try{

      const entity = await  this.updateProductUseCase.execute(action.dto);

      ctx.patchState({
        products : ctx.getState().products.map(p => {

            if(p.id == action.dto.id){
              return entity
            }

            return p
        })
      })


      action.callback?.onResult ? action.callback.onResult(entity) : null;



    }catch( err) {

      action.callback?.onError ? action.callback.onError(err as string) : null;
    }

    ctx.patchState({
      status : StatusAction.INITIAL
    });

    action.callback?.onComplete ? action.callback.onComplete() : null;

  }

}
