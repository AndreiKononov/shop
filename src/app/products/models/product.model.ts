import { Category } from '../enums/category';

export class Product {
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

    public setImgSrc(): string {
        if (this.category) {
            return `../../.././../assets/images/${this.category}.jpg`;
        } else {
            return `../../.././../assets/images/Default.jpg`;
        }
        // return `../../.././../assets/images/${this.category}.jpg` || '../../.././../assets/images/Default.jpg';
        // return `../../.././../assets/images/Default.jpg`;
    }

    public isAvailable(): boolean {
        return this.availableCount > 0;
    }
}
