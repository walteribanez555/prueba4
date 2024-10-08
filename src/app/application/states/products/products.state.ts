import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ProductsAction } from './products.actions';
import { ProductEntity } from '../../../domain/entities/Product.entity';
import { StatusAction } from '../../enums/StatusAction.enum';

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

  // @Selector()
  // static getState(state: ProductsStateModel) {
  //   return state;
  // }

  // @Action(ProductsAction)
  // add(ctx: StateContext<ProductsStateModel>, { payload }: ProductsAction) {
  //   const stateModel = ctx.getState();
  //   stateModel.items = [...stateModel.items, payload];
  //   ctx.setState(stateModel);
  // }
}
