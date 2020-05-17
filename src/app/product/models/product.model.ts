/**
 * Product Model
 */
import { Category } from '../enums/category';

export class Product {
  constructor(
    public id: number = null,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public available: boolean = true,
    public selected: boolean = false,
    public amount: number = 0,
  ) {}
}
