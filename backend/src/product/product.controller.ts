import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  getAll(
    @Query('categoryId') categoryId?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
  ) {
    return this.service.getAll({
      categoryId: categoryId ? Number(categoryId) : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  }

  @Post()
  create(@Body() body: { name: string; price: number; categoryId: number }) {
    return this.service.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
