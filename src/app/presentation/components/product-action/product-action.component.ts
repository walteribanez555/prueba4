import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-action',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './product-action.component.html',

})
export class ProductActionComponent { }
