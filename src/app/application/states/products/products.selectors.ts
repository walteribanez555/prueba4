import { createPropertySelectors, createSelector } from "@ngxs/store";
import { ProductsState, ProductsStateModel } from "./products.state";

export class ProductsSelectors {

  static getSlices = createPropertySelectors<ProductsStateModel>(ProductsState);

  static getProducts = createSelector(
    [this.getSlices.products],
    (products) => products
  )

  static getProductById = createSelector(
    [this.getSlices.productById],
    (product ) => product
  )

  static getStatusLoading = createSelector(
    [this.getSlices.status],
    (status) => status
  )


}
