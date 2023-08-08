import { Injectable, NotFoundException } from '@nestjs/common';
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

  //Get a book by id
  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  //Update a book by id
  async updateById(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  //Delete a book by id
  async deleteById(id: string): Promise<Book> {
    const book = await this.bookModel.findByIdAndDelete(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }
}
