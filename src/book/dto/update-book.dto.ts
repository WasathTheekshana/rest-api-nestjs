import { BookCategory } from 'src/enum/book-category';
import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(BookCategory, { message: 'Please enter a valid category' })
  readonly category: BookCategory;
}
