import { Product, ProductModel } from '../../../products/models/product.model';
// import { Category } from '../../../products/enums/category';

export interface ProductsState {
    data: ReadonlyArray<ProductModel>;
    selectedProduct: Readonly<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;

}
export const initialProductsState: ProductsState = {
    data: [
        // new Product(
        //     '1',
        //     'JavaScript: The Definitive Guide',
        //     'David Flanagan',
        //     'Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript ' +
        //     'programmers—a programmer\'s guide and comprehensive reference to the core language ' +
        //     'and to the client side JavaScript APIs defined by web browsers. ',
        //     10,
        //     Category.JavaScript,
        //     3),
        // new Product(
        //     '2',
        //     'Effective Java',
        //     'Joshua Bloch',
        //     'Java has changed dramatically since the previous edition of Effective Java was published shortly after the' +
        //     ' release of Java 6. This Jolt award-winning classic has now been thoroughly updated to take full advantage ' +
        //     'of the latest language and library features. The support in modern Java for multiple paradigms increases' +
        //     ' the need for specific best-practices advice, and this book delivers.',
        //     15,
        //     Category.Java,
        //     2),
        // new Product(
        //     '3',
        //     'Clean Code: A Handbook of Agile SC',
        //     'Robert C. Martin',
        //     'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.' +
        //     ' Every year, countless hours and significant resources are lost because of poorly written code. ' +
        //     'But it doesn’t have to be that way.',
        //     20,
        //     Category.Other,
        //     1),
    ],
    selectedProduct: null,
    loading: false,
    loaded: false,
    error: null
};
