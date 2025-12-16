import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@admin.com';
  const password = await bcrypt.hash('admin123', 10);

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
