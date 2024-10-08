import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { ProductsFacadeService } from '../../../application/facades/products-facade.service';
import { ProductEntity } from '../../../domain/entities/Product.entity';
import { StatusAction } from '../../../application/enums/StatusAction.enum';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './products.component.html',

})
export class ProductsComponent {


  private productsFacadeService = inject(ProductsFacadeService);


  products$ : Signal<ProductEntity[]> = this.productsFacadeService.products;

  productById$ : Signal<ProductEntity| null>= this.productsFacadeService.productById;

  status$ : Signal<StatusAction> = this.productsFacadeService.status;

}
