import { BookCategory } from "src/enum/book-category";

export class CreateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: BookCategory;
}