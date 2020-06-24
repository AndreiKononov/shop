import { Category } from '../enums/category';

export interface ProductModel {
    id: string,
    name: string,
    author: string,
    description: string,
    price: number,
    category: Category,
    availableCount: number,
    // bookImg: string,
    // isAvailable: any
}
export class Product implements ProductModel {
    constructor(
        public id: string,
        public name: string,
        public author: string,
        public description: string,
        public price: number,
        public category: Category,
        public availableCount: number,
    ) {
    }

    // public bookImg = `../../.././../assets/images/${this.category}.jpg`;
    //
    // public isAvailable(): boolean {
    //     return this.availableCount > 0;
    // }
}
