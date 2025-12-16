import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private service;
    constructor(service: AnalyticsService);
    totalProducts(): Promise<{
        total: number;
    }>;
    productsByCategory(): Promise<{
        category: string;
        count: number;
    }[]>;
}
