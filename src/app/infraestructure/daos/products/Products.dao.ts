export class ProductsResponseDAO {
  constructor(
    public readonly products : ProductDao[],
    public readonly total : number,
    public readonly skip : number,
    public readonly limit : number,

  ) {}

  static fromObj(props: { [key: string]: any }) {
    const { products, total , skip ,limit} = props;

    if(!products) return ['PRODUCT RESPONSE DAO: products are required' , undefined];
    if(!total) return ['PRODUCT RESPONSE DAO: total are required' , undefined];
    if(!skip) return ['PRODUCT RESPONSE DAO: skip required' , undefined];
    if(!limit) return ['PRODUCT RESPONSE DAO: limit are required' , undefined];

    let productsMapped : ProductDao[] = products.forEach( (p : any) => {
      const [err, dto] = ProductDao.fromObj(p);

      if(err) throw Error(err as string);

      return dto as ProductDao
    });


    return [undefined, new ProductsResponseDAO(productsMapped, total,skip,limit)];
  }
}

export class ProductDao {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description?: string,
    public readonly category?: string,
    public readonly price?: number,
    public readonly isDeleted?: boolean
  ) {}

  static fromObj(props: { [key: string]: any }) {
    const { id, title, description, category, price, isDeleted } = props;

    if (!id) return ['PRODUCT DAO: Id is required', undefined];
    if (!title) return ['PRODUCT DAO: Title is required', undefined];

    return [
      undefined,
      new ProductDao(id, title, description, category, price, isDeleted),
    ];
  }
}
