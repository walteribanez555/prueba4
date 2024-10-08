import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductEntity } from '../../../domain/entities/Product.entity';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './product.component.html',

})
export class ProductComponent {


  @Input( ) product! : ProductEntity;



 }
