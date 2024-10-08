

export class CreateProductDTO {
  constructor(
    private readonly title: string,
    private readonly description? : string,
    private readonly category? :string,
    private readonly price? : number,
  ) {

  }


  static create( props : {[key:string] : any}) {
    const { title, description, category, price } = props;


    if(!title) return ['Create Product DTO: Title is required' , undefined] ;

    return [undefined, new CreateProductDTO(title, description, category, price)];

  }
}
