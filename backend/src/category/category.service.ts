import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.category.findMany()
  }

  create(name: string) {
    return this.prisma.category.create({
      data: { name },
    })
  }

  delete(id: number) {
    return this.prisma.category.delete({
      where: { id },
    })
  }
}