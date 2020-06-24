import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

import { CartItem } from '../../models/cartItem.model';
import { CartFacade, ProductsFacade } from 'src/app/core/@ngrx';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
    @Input() cartItem: CartItem;

    constructor(
        private productsFacade: ProductsFacade,
        private cartFacade: CartFacade
    ) {
    }

    onRemoveCartItem(): void {
        const productToReturn = {
            ...this.cartItem.product,
            availableCount: this.cartItem.product.availableCount + this.cartItem.count
        };
        this.cartFacade.removeProduct({ cartItem: this.cartItem });
        this.productsFacade.returnProduct({ product: productToReturn });
    }

    onIncreaseQuantity(): void {
        const productToBuy = {
            ...this.cartItem.product,
            availableCount: this.cartItem.product.availableCount - 1
        };
        this.cartFacade.increaseQuantity({ cartItem: this.cartItem });
        this.productsFacade.buyProduct({ product: productToBuy });
    }

    onDecreaseQuantity(): void {
        const productToReturn = {
            ...this.cartItem.product,
            availableCount: this.cartItem.product.availableCount + 1
        };
        this.cartFacade.decreaseQuantity({ cartItem: this.cartItem });
        this.productsFacade.returnProduct({ product: productToReturn });
    }
}
