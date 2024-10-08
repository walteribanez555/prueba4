import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-action',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl : './product-action.component.html',

})
export class ProductActionComponent {

  @Input() form! : FormGroup;
  @Output() onSubmitEvent = new EventEmitter();
  @Output() onDeleteEvent = new EventEmitter();



  onSubmit() {
    this.onSubmitEvent.emit();
  }

  onDelete() {
    const { id } =this.form.value;

    if(!id) return;

    this.onDeleteEvent.emit(id);
  }
 }
