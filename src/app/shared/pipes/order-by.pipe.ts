import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../../cart/models/cartItem.model';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(
        value: CartItem[],
        propertyName: string,
        direction: boolean
    ): CartItem[] {
        return value.sort((a, b) => {
            switch (propertyName) {
                case 'price':
                    return this.compare(
                        a.product.price,
                        b.product.price,
                        direction
                    );
                case 'quantity':
                    return this.compare(
                        a.count,
                        b.count,
                        direction
                    );
                case 'name':
                    return this.compare(
                        a.product.name,
                        b.product.name,
                        direction
                    );
                default:
                    return 0;
            }
        });
    }

    compare(a: number | string, b: number | string, isAscending: boolean): number {
        return a === b ? 0 : (
            (a < b ? -1 : 1) * (isAscending ? 1 : -1)
        );
    }
}
