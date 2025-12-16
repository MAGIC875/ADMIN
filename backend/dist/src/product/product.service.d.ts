import { PrismaService } from '../prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(filters: {
        categoryId?: number;
        minPrice?: number;
        maxPrice?: number;
    }): import("@prisma/client").Prisma.PrismaPromise<({
        category: {
            id: number;
            createdAt: Date;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        categoryId: number;
    })[]>;
    create(data: {
        name: string;
        price: number;
        categoryId: number;
    }): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
