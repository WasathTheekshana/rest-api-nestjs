import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @HttpCode(200)
  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book: Book,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
}
