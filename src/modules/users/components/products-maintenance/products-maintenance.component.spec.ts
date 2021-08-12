import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMaintenanceComponent } from './products-maintenance.component';

describe('ProductsMaintenanceComponent', () => {
  let component: ProductsMaintenanceComponent;
  let fixture: ComponentFixture<ProductsMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
