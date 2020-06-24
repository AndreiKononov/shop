import { Product } from '../../products/models/product.model';

export class CartItem {
    constructor(
        public product: Product,
        public count: number
    ) {
    }

    // getTotal(): number {
    //     return this.count * this.product.price;
    // }
}
