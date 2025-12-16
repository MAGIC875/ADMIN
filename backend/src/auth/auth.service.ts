import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({ where: { email } })
    if (!admin) throw new UnauthorizedException('Invalid credentials')

    const match = await bcrypt.compare(password, admin.password)
    if (!match) throw new UnauthorizedException('Invalid credentials')

    return admin
  }

  async login(email: string, password: string) {
    const admin = await this.validateAdmin(email, password)
    const payload = { sub: admin.id, email: admin.email }
    return { access_token: this.jwtService.sign(payload) }
  }
}