import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTitleComponent } from './cart-title.component';

describe('CartTitleComponent', () => {
  let component: CartTitleComponent;
  let fixture: ComponentFixture<CartTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
