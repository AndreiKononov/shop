import { CartItem } from '../../../cart/models/cartItem.model';
import { OrderStatus } from '..';

export interface Order {
    id: string;
    date: Date;
    status: OrderStatus;
    cartProducts: CartItem[];
    totalQuantity: number;
    total: number;
}
