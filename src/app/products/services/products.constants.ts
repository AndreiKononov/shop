import { Product } from '../models/product.model';
import { Category } from '../enums/category';

export const mockedBooks: Product[] = [
    new Product(
        1,
        'JavaScript: The Definitive Guide',
        'David Flanagan',
        'Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript ' +
        'programmers—a programmer\'s guide and comprehensive reference to the core language ' +
        'and to the client side JavaScript APIs defined by web browsers. ',
        10,
        Category.JavaScript,
        2),
    new Product(
        2,
        'Effective Java',
        'Joshua Bloch',
        'Java has changed dramatically since the previous edition of Effective Java was published shortly after the' +
        ' release of Java 6. This Jolt award-winning classic has now been thoroughly updated to take full advantage ' +
        'of the latest language and library features. The support in modern Java for multiple paradigms increases' +
        ' the need for specific best-practices advice, and this book delivers.',
        10,
        Category.Java,
        2),
    new Product(
        3,
        'Clean Code: A Handbook of Agile Software Craftsmanship',
        'Robert C. Martin',
        'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.' +
        ' Every year, countless hours and significant resources are lost because of poorly written code. ' +
        'But it doesn’t have to be that way.',
        10,
        Category.Other,
        0),
    new Product(
        4,
        'CSS: The Missing Manual',
        'David Sawyer McFarland',
        'CSS lets you create professional-looking websites, but learning its finer points can be tricky—even for' +
        ' seasoned web developers. This fully updated edition provides the most modern and effective tips, tricks,' +
        ' and tutorial-based instruction on CSS available today. Learn how to use new tools such as Flexbox' +
        ' and Sass to build web pages that look great and run fast on any desktop or mobile device.' +
        'Ideal for casual and experienced designers alike.',
        10,
        Category.CSS,
        0),
    new Product(
        5,
        'Digital Fortress',
        'Dan Brown',
        'When the NSA\'s invincible code-breaking machine encounters a mysterious code it cannot break, ' +
        'the agency calls its head cryptographer, Susan Fletcher, a brilliant, beautiful mathematician.' +
        'What she uncovers sends shock waves through the corridors of power. The NSA is being held hostage, not by guns or bombs,' +
        'but by a code so complex that if released it would cripple U.S. intelligence. Caught in an accelerating' +
        ' tempest of secrecy and lies, Fletcher battles to save the agency she believes in. Betrayed on all sides,' +
        ' she finds herself fighting not only for her country but for her life, and in the end, for the life of the man she loves.',
        10,
        Category.Fiction,
        0),
];
