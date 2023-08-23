import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PoupupService } from 'src/app/services/poupup.service';
import { VisualConditionService } from 'src/app/services/visual-condition.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  @Input() storeId!: string;
  newProduct = {
    title: '',
    description: '',
  };

  constructor(
    private data: DataService,
    private condition: VisualConditionService,
    private poupup: PoupupService
  ) {}

  addProduct() {
    let { title, description } = this.newProduct;
    if (title.length > 1 && description.length > 1) {
      this.newProduct.title = '';
      this.newProduct.description = '';
      let thisProduct = { title: title, description: description };
      this.data.addProduct(this.storeId, thisProduct);
      this.condition.swicthCondition();
      this.poupup.changeEntity();
      this.poupup.getPoupup('confirm');
      this.poupup.showPoupup();
    } else {
      this.poupup.changeEntity(' del prodotto');
      this.poupup.getPoupup('alert');
      this.poupup.showPoupup();
    }
  }
}
// AddProductFormComponent(idstore, product)
