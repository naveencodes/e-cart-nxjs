import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailmodalComponent } from './productdetailmodal.component';

describe('ProductdetailmodalComponent', () => {
  let component: ProductdetailmodalComponent;
  let fixture: ComponentFixture<ProductdetailmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailmodalComponent]
    });
    fixture = TestBed.createComponent(ProductdetailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
