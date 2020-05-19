import { Category } from '../enums/category';

export class Product {
    constructor(
        public id: number = null,
        public name: string,
        public author: string,
        public description: string,
        public price: number,
        public category: Category,
        public available: number = 0,
        public selected: number = 0,
    ) {
    }
}