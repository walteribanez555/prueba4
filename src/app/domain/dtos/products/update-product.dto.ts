export class UpdateProductDTO {
  constructor(
    private readonly id : number,
    private readonly title : string,
    private readonly description? : string,
    private readonly category? :string,
    private readonly price? : number,
  ) {

  }


  static create( props : {[key:string] : any}){
    const { id, title, description, category, price} = props;

    if(!id) return ['Update Product DTO : Id is required ', undefined];

    if(!title) return ['Update Product DTO : Title is required', undefined];

    return [undefined, new UpdateProductDTO(id, title,description, category,price)];
  }
}
