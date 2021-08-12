import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component';

@Component({
  selector: 'app-products-maintenance',
  templateUrl: './products-maintenance.component.html',
  styleUrls: ['./products-maintenance.component.scss']
})
export class ProductsMaintenanceComponent implements OnInit {

  productsList: any = [];

  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  dataSource = new MatTableDataSource<any>(this.productsList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllProducts();
  }

  openDialog(id: number, type: string): void {
    const dialogRef = this.dialog.open(ProductsDialogComponent, {
      width: '650px',
      data: {
        id,
        type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (!result) {
        this.getAllProducts();
      }
    });
  }

  doSomething(arg: any): void {
    console.log(arg);
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(response => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  getOneProduct(id: number) {
    this.productsService.getProductById(id).subscribe(response => {
      console.log(response);
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(response => {
      if (response) {
        this.getAllProducts();
      }
    });
  }
}
