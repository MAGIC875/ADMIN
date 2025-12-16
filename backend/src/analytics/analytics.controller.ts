import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AnalyticsService } from './analytics.service'

@Controller('analytics')
@UseGuards(AuthGuard('jwt'))
export class AnalyticsController {
  constructor(private service: AnalyticsService) {}

  // 🔢 всего товаров
  @Get('total-products')
  totalProducts() {
    return this.service.totalProducts()
  }

  // 🥧 данные для диаграммы
  @Get('products-by-category')
  productsByCategory() {
    return this.service.productsByCategory()
  }
}