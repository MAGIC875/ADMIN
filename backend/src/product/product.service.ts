import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getAll(filters: { categoryId?: number; minPrice?: number; maxPrice?: number }) {
    return this.prisma.product.findMany({
      where: {
        categoryId: filters.categoryId,
        price: {
          gte: filters.minPrice ?? undefined,
          lte: filters.maxPrice ?? undefined,
        },
      },
      include: { category: true },
    })
  }

  create(data: { name: string; price: number; categoryId: number }) {
    return this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        categoryId: data.categoryId,
      },
    })
  }

  delete(id: number) {
    return this.prisma.product.delete({
      where: { id },
    })
  }
}