const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ตัวอย่าง ดึงผู้ใช้ทั้งหมด
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
