import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpreviewComponent } from './productpreview.component';

describe('ProductpreviewComponent', () => {
  let component: ProductpreviewComponent;
  let fixture: ComponentFixture<ProductpreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductpreviewComponent]
    });
    fixture = TestBed.createComponent(ProductpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
