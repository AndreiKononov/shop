import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ProductComponent } from './product.component';
import { Category } from '../../enums/category';
import { Product } from '../../models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    template: `
        <app-product
            (buyProduct)="onBuyProduct($event)"
            (deleteProduct)="onDeleteProduct($event)"
            (editProduct)="onEditProduct($event)"
            (goToProduct)="onGoToProduct($event)"
            [editable]="editable"
            [product]="product"
        ></app-product>
    `
})
class ProductItemHostComponent {
    product = {
        id: '1',
        name: 'Name 1',
        author: 'Author 1',
        description: 'Description 1',
        price: 20,
        category: Category.JavaScript,
        availableCount: 5,
    } as Product;
    editable: boolean;
    selectedProduct: Product;

    onBuyProduct(product: Product) {
        this.selectedProduct = product;
    }

    onDeleteProduct(product: Product) {
        this.selectedProduct = product;
    }

    onEditProduct(product: Product) {
        this.selectedProduct = product;
    }

    onGoToProduct(product: Product) {
        this.selectedProduct = product;
    }
}

describe('ProductComponent', () => {
    let component: ProductItemHostComponent;
    let fixture: ComponentFixture<ProductItemHostComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductComponent, ProductItemHostComponent],
            imports: [SharedModule, HttpClientModule],
        }).overrideComponent(ProductComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductItemHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Go To Product Link', () => {
        it('should raise selected product when clicked', () => {
            const goToEl = fixture.debugElement.query(By.css('.go-to-link'));
            goToEl.triggerEventHandler('click', null);
            expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
        });
    });

    describe('Not Editable', () => {
        beforeEach(() => {
            component.editable = false;
            fixture.detectChanges();
        });

        describe('Actions', () => {

            it('should contain buy button', () => {
                de = fixture.debugElement.query(By.css('.buy-button'));
                expect(de.nativeElement).toBeDefined();
            });

            it('should not contain edit button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de).toBeNull();
            });

            it('should not contain delete button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de).toBeNull();
            });
        });

        describe('Buy Button', () => {
            let buyEl;
            beforeEach(() => {
                buyEl = fixture.debugElement.query(By.css('.buy-button'));
            });

            it('should raise selected product when clicked', () => {
                buyEl.triggerEventHandler('click', null);
                expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
            });
            it('should not be disabled if there is available product', () => {
                component.product.availableCount = 5;
                fixture.detectChanges();
                expect(buyEl.nativeElement.getAttribute('disabled')).toBeNull();
            });
        });

        describe('Editable', () => {
            beforeEach(() => {
                component.editable = true;
                fixture.detectChanges();
            });
            describe('Actions', () => {

                it('should not contain buy button', () => {
                    de = fixture.debugElement.query(By.css('.buy-button'));
                    expect(de).toBeNull();
                });

                it('should contain edit button', () => {
                    de = fixture.debugElement.query(By.css('.edit-button'));
                    expect(de.nativeElement).toBeDefined();
                });

                it('should contain delete button', () => {
                    de = fixture.debugElement.query(By.css('.edit-button'));
                    expect(de.nativeElement).toBeDefined();
                });
            });

            describe('Edit Button', () => {
                it('should raise selected product when clicked', () => {
                    const editEl = fixture.debugElement.query(By.css('.edit-button'));
                    editEl.triggerEventHandler('click', null);
                    expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
                });
            });
            describe('Delete Button', () => {
                it('should raise selected product when clicked', () => {
                    const deleteEl = fixture.debugElement.query(By.css('.delete-button'));
                    deleteEl.triggerEventHandler('click', null);
                    expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
                });
            });
        });
    });
});
