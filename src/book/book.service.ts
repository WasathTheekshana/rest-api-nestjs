import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  //Read all books
  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  //Create a book
  async create(book: Book): Promise<Book> {
    const res = await this.bookModel.create(book);
    return res;
  }
}
