import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesMaintenanceComponent } from './components/branches-maintenance/branches-maintenance.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ProductsMaintenanceComponent } from './components/products-maintenance/products-maintenance.component';
import { UsersMaintenanceComponent } from './components/users-maintenance/users-maintenance.component';

const routes: Routes = [
  {
    path:'',
    component: MainViewComponent,
    children: [
      {
        path: 'home',
        component: HomeViewComponent
      },
      {
        path: 'branches',
        component: BranchesMaintenanceComponent
      },
      {
        path: 'users',
        component: UsersMaintenanceComponent
      },
      {
        path: 'products',
        component: ProductsMaintenanceComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
