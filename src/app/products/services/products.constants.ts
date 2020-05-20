import { Product } from '../models/product.model';
import { Category } from '../enums/category';

export const mockedBooks: Product[] = [
    {
        id: 1,
        name: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        description: 'Since 1996, JavaScript: The Definitive' +
            ' Guide has been the bible for JavaScript programmers—a programmer\'s guide and comprehensive reference to' +
            ' the core language and to the client side JavaScript APIs defined by web browsers. ',
        price: 37.38,
        category: Category.JavaScript,
        available: true,
        selected: 1,
    },
    {
        id: 2,
        name: 'Effective Java',
        author: 'Joshua Bloch',
        description: 'Java has changed dramatically since the previous edition of' +
            ' Effective Java' +
            ' was published shortly after the release of Java 6. This Jolt award-winning classic has now been thoroughly' +
            ' updated to take full advantage of the latest language and library features. The support in modern Java for' +
            ' multiple paradigms increases the need for specific best-practices advice, and this book delivers.',
        price: 43.49,
        category: Category.Java,
        available: true,
        selected: 2,
    },
    {
        id: 3,
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        description: 'Even bad code' +
            ' can function. But if code isn’t clean, it can bring a development organization to its knees. Every year,' +
            ' countless hours and significant resources are lost because of poorly written code. ' +
            'But it doesn’t have to be that way.',
        price: 34.93,
        category: Category.Other,
        available: true,
        selected: 0,
    },
    {
        id: 4,
        name: 'CSS: The Missing Manual',
        author: 'David Sawyer McFarland',
        description: 'CSS lets you create professional-looking' +
            ' websites, but learning its finer points can be tricky—even for seasoned web developers. This fully updated' +
            ' edition provides the most modern and effective tips, tricks, and tutorial-based instruction on CSS' +
            ' available today. Learn how to use new tools such as Flexbox and Sass to build web pages that look great' +
            ' and run fast on any desktop or mobile device. Ideal for casual and experienced ' +
            'designers alike.',
        price: 23.39,
        category: Category.CSS,
        available: false,
        selected: 0,
    },
    {
        id: 5,
        name: 'Digital Fortress',
        author: 'Dan Brown',
        description: 'When the NSA\'s invincible code-breaking machine encounters a' +
            ' mysterious code it cannot break, the agency calls its head cryptographer, Susan Fletcher, a brilliant,' +
            ' beautiful mathematician. What she uncovers sends shock waves through the corridors of power. The NSA is' +
            ' being held hostage, not by guns or bombs, but by a code so complex that if released it would cripple U.S.' +
            ' intelligence. Caught in an accelerating tempest of secrecy and lies, Fletcher battles to save the agency' +
            ' she believes in. Betrayed on all sides, she finds herself fighting not only for her country but for her' +
            ' life, and in the end, for the life of the man she loves.',
        price: 17.99,
        category: Category.Fiction,
        available: false,
        selected: 0,
    },
];
