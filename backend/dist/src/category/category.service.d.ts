import { PrismaService } from '../prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
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
    delete(id: number): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        id: number;
        createdAt: Date;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
