import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext, Actions } from '@ngxs/store';
import { ProductEntity } from '../../../domain/entities/Product.entity';
import { StatusAction } from '../../enums/StatusAction.enum';
import { ProductsActions } from './products.actions';

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


  @Action(ProductsActions.Create)
  async create(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Create
  ){

  }

  @Action(ProductsActions.Delete)
  async delete(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Delete
  ){

  }

  @Action(ProductsActions.Get)
  async get(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Get
  ){

  }

  @Action(ProductsActions.GetAll)
  async getAll(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.GetAll
  ){

  }

  @Action(ProductsActions.Update)
  async update(
    ctx : StateContext<ProductsStateModel>,
    action : ProductsActions.Update
  ){

  }

}
