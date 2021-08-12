import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersMaintenanceComponent } from './components/users-maintenance/users-maintenance.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsMaintenanceComponent } from './components/products-maintenance/products-maintenance.component';
import { BranchesMaintenanceComponent } from './components/branches-maintenance/branches-maintenance.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ProductsService } from './services/products.service';
import { ProductsDialogComponent } from './components/products-dialog/products-dialog.component';
import { BranchesDialogComponent } from './components/branches-dialog/branches-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    UsersMaintenanceComponent,
    InformationDialogComponent,
    MainViewComponent,
    ProductsMaintenanceComponent,
    BranchesMaintenanceComponent,
    HomeViewComponent,
    ProductsDialogComponent,
    BranchesDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    LayoutModule
  ],
  exports: [
    UsersMaintenanceComponent
  ],
  providers: [
    UsersService,
    ProductsService
  ]
})
export class UsersModule { }