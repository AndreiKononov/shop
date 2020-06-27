import { CartItem } from '../../../cart/models/cartItem.model';

export interface Order {
    id: string;
    date: Date;
    cartProducts: CartItem[];
    totalQuantity: number;
    total: number;
    firstName: string;
    lastName: string;
    phones: { phone: string }[];
    email: string;
    pickup: boolean;
    deliveryAddress: string;
}
