export class ProductsAction {
  static readonly type = '[Products] Add item';
  constructor(readonly payload: string) { }
}
