import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookCategory } from 'src/enum/book-category';

@Schema({ timestamps: true })
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: BookCategory;
}

export const BookSchema = SchemaFactory.createForClass(Book);
