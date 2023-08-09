import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { BookCategory } from 'src/enum/book-category';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(BookCategory, { message: 'Please enter a valid category' })
  readonly category: BookCategory;
}
