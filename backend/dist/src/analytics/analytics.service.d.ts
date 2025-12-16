import { PrismaService } from '../prisma/prisma.service';
export declare class AnalyticsService {
    private prisma;
    constructor(prisma: PrismaService);
    totalProducts(): Promise<{
        total: number;
    }>;
    productsByCategory(): Promise<{
        category: string;
        count: number;
    }[]>;
}
