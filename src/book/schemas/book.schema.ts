import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookCategory } from 'src/enum/book-category';

@Schema({
  timestamps: true,
})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: BookCategory;
}

export const BookSchema = SchemaFactory.createForClass(Book);
