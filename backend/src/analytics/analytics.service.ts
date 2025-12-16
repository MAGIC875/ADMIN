import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  // 1. Всего товаров
  async totalProducts() {
    const count = await this.prisma.product.count()
    return { total: count }
  }

  // 2. Товары по категориям (для pie chart)
  async productsByCategory() {
    const categories = await this.prisma.category.findMany({
      include: {
        products: true,
      },
    })

    return categories.map((cat) => ({
      category: cat.name,
      count: cat.products.length,
    }))
  }
}