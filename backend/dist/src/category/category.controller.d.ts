import { CategoryService } from './category.service';
export declare class CategoryController {
    private service;
    constructor(service: CategoryService);
    getAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        name: string;
    }[]>;
    create(name: string): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        createdAt: Date;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        createdAt: Date;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
