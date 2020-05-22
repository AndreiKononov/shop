import { Category } from '../enums/category';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public description: string,
        public price: number,
        public category: Category,
        public availableCount: number,
    ) {
    }

    public isAvailable(): boolean {
        return this.availableCount > 0;
    }
}
