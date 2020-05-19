import { Product } from '../../products/models/product.model';
import { Category } from '../../products/enums/category';

export interface CartItem extends Partial<Product> {
    name: string;
    description: string;
    price: number;
    category: Category;
    available: number;
    selected: number;
}
