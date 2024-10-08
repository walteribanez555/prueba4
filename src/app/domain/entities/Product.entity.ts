import { ProductDao } from "../../infraestructure/daos/products/Products.dao";

export class ProductEntity {
   constructor(
    public readonly id : number,
    public readonly title : string,
    public readonly description? : string,
    public readonly category? :string,
    public readonly price? : number,
   ) {

   }



   public static fromObject( props : {[key:string] : any}) {
    const { id, title, description, category ,price } = props;


    if( !id ) return ['Entity Product : Id is required' , undefined];
    if( !title ) return ['Entity Product: Title is required' , undefined];


    return [ undefined, new ProductEntity(id, title, description, category, price)];
  }

  public static fromDAO( productDao : ProductDao) {
    return [undefined, new ProductEntity(productDao.id, productDao.title, productDao.description, productDao.category, productDao.price)]

  }
}
