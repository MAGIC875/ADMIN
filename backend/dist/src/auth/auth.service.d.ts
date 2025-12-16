import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateAdmin(email: string, password: string): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
