import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Query } from 'express-serve-static-core';
@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  //Read all books
  async findAll(query: Query): Promise<Book[]> {
    
    const resPerPage = 2 // results per page
    const currentPage = Number(query.page) || 1 
    const skip = resPerPage * (currentPage - 1) 


    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const books = await this.bookModel.find({ ...keyword }).limit(resPerPage).skip(skip);
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
