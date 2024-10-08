export class ProductEntity {
   constructor(
    private readonly id : number,
    private readonly title : string,
    private readonly description? : string,
    private readonly category? :string,
    private readonly price? : number,
   ) {

   }



   public static fromObject( props : {[key:string] : any}) {
    const { id, title, description, category ,price } = props;


    if( !id ) return ['Entity Product : Id is required' , undefined];
    if( !title ) return ['Entity Product: Title is required' , undefined];


    return [ undefined, new ProductEntity(id, title, description, category, price)];
  }
}
