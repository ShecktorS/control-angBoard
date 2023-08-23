import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  storeId!: string | null;
  productId!: string | null;
  store: any;
  product: any;
  editMode = false;
  inputTitle!: string;
  inputDescription!: string;
  isLogged = this.auth.person.isLogged;

  getId = (num: number) => num - 1;

  changeMode() {
    this.editMode = !this.editMode;
  }

  editProduct() {
    if (this.inputTitle.length > 1 && this.inputDescription.length > 1) {
      this.changeMode();
      let newProduct = {
        title: this.inputTitle,
        description: this.inputDescription,
        idProduct: +this.productId!,
      };
      this.data.editProduct(this.storeId!, this.productId!, newProduct);
      this.updateData();
    } else {
      alert('iInserisci correttamente tutti i dati!');
    }
  }

  updateData() {
    this.store = this.data.getStorebyId(this.storeId!);
    this.product = this.data.getProductbyId(this.storeId!, this.productId!);
  }

  constructor(
    private data: DataService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.productId = this.route.snapshot.paramMap.get('idProduct');
    if (this.storeId && this.productId) {
      this.store = this.data.getStorebyId(this.storeId);
      this.product = this.data.getProductbyId(this.storeId, this.productId);
      this.inputTitle = this.product.title;
      this.inputDescription = this.product.description;
    } else {
    }
  }
}
