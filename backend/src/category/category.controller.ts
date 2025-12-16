import { Controller, Get, Post, Body, UseGuards, Delete, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CategoryService } from './category.service'

@Controller('categories')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Post()
  create(@Body('name') name: string) {
    return this.service.create(name)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id)
  }
}