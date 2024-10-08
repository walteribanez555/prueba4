export class UpdateProductDTO {
  constructor(
    public readonly id : number,
    public readonly title : string,

  ) {

  }


  static create( props : {[key:string] : any}){
    const { id, title, description, category, price} = props;

    if(!id) return ['Update Product DTO : Id is required ', undefined];

    if(!title) return ['Update Product DTO : Title is required', undefined];

    return [undefined, new UpdateProductDTO(id, title)];
  }
}
