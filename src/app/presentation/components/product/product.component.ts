import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './product.component.html',

})
export class ProductComponent { }
