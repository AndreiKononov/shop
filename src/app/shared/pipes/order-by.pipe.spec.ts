import {OrderByPipe} from './order-by.pipe';
import {CartItem} from '../../cart/models/cartItem.model';
import {Product} from '../../products/models/product.model';
import {Category} from '../../products/enums/category';

describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();

    const CART_PRODUCTS = [
        {
            product: {
                id: '1',
                name: 'Name 1',
                author: 'Author 1',
                description: 'Description 1',
                price: 20,
                category: Category.JavaScript,
                availableCount: 1,
            } as Product,
            count: 3
        } as CartItem,
        {
            product: {
                id: '2',
                name: 'Name 2',
                author: 'Author 2',
                description: 'Description 2',
                price: 10,
                category: Category.CSS,
                availableCount: 2,
            } as Product,
            count: 4
        } as CartItem,
        {
            product: {
                id: '3',
                name: 'Name 3',
                author: 'Author 3',
                description: 'Description 3',
                price: 15,
                category: Category.Fiction,
                availableCount: 3,
            } as Product,
            count: 2
        } as CartItem
    ];

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should order cart items by product name asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'name', true)[0].product.name).toBe('Name 1');
    });
    it('should order cart items by product name desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'name', false)[0].product.name).toBe('Name 3');
    });
    it('should order cart items by product price asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'price', true)[0].product.price).toBe(10);
    });
    it('should order cart items by product price desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'price', false)[0].product.price).toBe(20);
    });
    it('should order cart items by quantity asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'quantity', true)[0].count).toBe(2);
    });
    it('should order cart items by quantity desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'quantity', false)[0].count).toBe(4);
    });
    it('should do nothing if sort name is not quantity/name/price', () => {
        expect(JSON.stringify(pipe.transform(CART_PRODUCTS, 'qwe', true))).toBe(JSON.stringify(CART_PRODUCTS));
    });
});
