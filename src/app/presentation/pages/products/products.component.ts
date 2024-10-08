import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { ProductsFacadeService } from '../../../application/facades/products-facade.service';
import { ProductEntity } from '../../../domain/entities/Product.entity';
import { StatusAction } from '../../../application/enums/StatusAction.enum';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateProductDTO } from '../../../domain/dtos/products/create-product.dto';
import { UpdateProductDTO } from '../../../domain/dtos/products/update-product.dto';
import { ProductComponent } from '../../components/product/product.component';
import { ProductActionComponent } from '../../components/product-action/product-action.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductComponent,
    ProductActionComponent,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  private productsFacadeService = inject(ProductsFacadeService);

  products$: Signal<ProductEntity[]> = this.productsFacadeService.products;

  productById$: Signal<ProductEntity | null> =
    this.productsFacadeService.productById;

  status$: Signal<StatusAction> = this.productsFacadeService.status;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
  });

  onSelectItem(product: ProductEntity) {
    this.form.patchValue({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
    });
  }


  onSubmitEvent( ) {
    const {id} = this.form.value;


    id ? this.onEdit() : this.onCreate();
  }

  onCreate() {
    if (!this.form.valid) return;

    const { title, description, category, price } = this.form.value;

    const [err, dto] = CreateProductDTO.create({
      title,
      description,
      category,
      price,
    });

    if (err) console.log(err as string);

    this.productsFacadeService.create(dto as CreateProductDTO, {
      onError: (e) => {
        console.log(e);
      },
      onComplete: () => {
        this.form.reset();
      },
      onLoading: () => {},
      onResult(entity) {
        console.log(entity);
      },
    });
  }

  onEdit() {

    if (!this.form.valid) return;

    const { id, title, description, category, price } = this.form.value;

    const [err, dto] = UpdateProductDTO.create({
      id,
      title,
      description,
      category,
      price,
    });

    if (err) console.log(err as string);

    this.productsFacadeService.update(dto as UpdateProductDTO, {
      onError: (e) => {
        console.log(e);
      },
      onComplete: () => {
        this.form.reset();
      },
      onLoading: () => {},
      onResult(entity) {
        console.log(entity);
      },
    });
  }

  onDelete(id : number) {
    this.productsFacadeService.delete(id, {
      onLoading: () => {},
      onComplete: () => {},
      onResult: (response: any) => {},
      onError: (e) => {
        console.log(e);
      },
    });
  }
}
