import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { ProductsMaintenanceComponent } from '../products-maintenance/products-maintenance.component';

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.scss']
})
export class ProductsDialogComponent implements OnInit {

  product: any = {};

  constructor(
    public dialogRef: MatDialogRef<ProductsMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { }

  productGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true}],
    price: [{ value: '', disabled: true}],
  });

  ngOnInit(): void {
    if (this.data.type === 'edit' || this.data.type === 'view') {
      this.getOneProduct(this.data.id, this.data.type);
    } else {
      this.productGroup = this.formBuilder.group({
        name: [''],
        price: [''],
      });
    }
  }

  
  getOneProduct(id: number, type: string) {
    this.productsService.getProductById(id).subscribe(response => {
      this.product = response;
      this.productGroup = this.formBuilder.group({
        name: [{ value: this.product.name, disabled: type==='view'}],
        price: [{ value: this.product.price, disabled: type==='view'}],
      });
    })
  }

  editOneProduct(id: number, user: any) {
    let productData = this.productAsign();
    this.productsService.editProduct(id, productData).subscribe(response => {
      this.product = response;
    })
  }

  createProduct() {
    let productData = this.productAsign();
    this.productsService.createProduct(productData).subscribe(response => {
      console.log(response);
    });
  }

  productAsign(): Object {
    let product = {};
    product['name'] = this.productGroup.controls.name.value;
    product['price'] = this.productGroup.controls.price.value;
    return product;
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(response => {
      console.log(response);
    });
  }

}
