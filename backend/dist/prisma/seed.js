"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    const email = 'admin@admin.com';
    const password = await bcrypt_1.default.hash('admin123', 10);
    const exists = await prisma.admin.findUnique({ where: { email } });
    if (exists) {
        console.log('Admin already exists');
        return;
    }
    await prisma.admin.create({
        data: { email, password },
    });
    console.log('Admin created');
}
main()
    .catch(console.error)
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map