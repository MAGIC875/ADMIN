import { ProductService } from './product.service';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    getAll(categoryId?: string, minPrice?: string, maxPrice?: string): import("@prisma/client").Prisma.PrismaPromise<({
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
    create(body: {
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
    delete(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
