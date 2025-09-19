import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// 🔐 LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: { email, password },
    });
    if (user) {
      res.send({ login: true, user });
    } else {
      res.send({ login: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง ❌' });
    }
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).send({ login: false, message: 'Server error' });
  }
});

// 📝 REGISTER
app.post('/register', async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return res.status(400).send({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ success: false, message: '❌ รหัสผ่านไม่ตรงกัน' });
  }

  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return res.status(400).send({ success: false, message: 'อีเมลนี้ถูกใช้งานแล้ว ❌' });
    }

    await prisma.user.create({
      data: { email, password, firstName, lastName },
    });

    res.send({ success: true, message: '✅ สมัครสมาชิกสำเร็จ' });
  } catch (err) {
    console.error('❌ Register error:', err);
    res.status(500).send({ success: false, message: 'ไม่สามารถบันทึกข้อมูลผู้ใช้ได้' });
  }
});

// 📨 CONTACT FORM
app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).send({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  try {
    await prisma.contact.create({ data: { name, email, phone, message } });
    res.send({ success: true, message: '✅ ข้อความถูกส่งเรียบร้อยแล้ว' });
  } catch (err) {
    console.error('❌ Contact error:', err);
    res.status(500).send({ success: false, message: 'ไม่สามารถส่งข้อความได้' });
  }
});

// ✅ PROJECTS
app.get('/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      select: { id: true, title: true, description: true, code: true },
    });
    res.json(projects);
  } catch (err) {
    console.error('❌ Fetch projects error:', err);
    res.status(500).json({ success: false, message: 'ไม่สามารถดึงข้อมูลโปรเจกต์ได้' });
  }
});

// ✅ ส่งรูปภาพ
app.get('/image/:id', (req, res) => serveImage(req, res, 'image'));
app.get('/image2/:id', (req, res) => serveImage(req, res, 'image2'));
app.get('/image3/:id', (req, res) => serveImage(req, res, 'image3'));
app.get('/image4/:id', (req, res) => serveImage(req, res, 'image4'));

async function serveImage(req, res, fieldName) {
  const projectId = parseInt(req.params.id);
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { [fieldName]: true },
    });

    if (!project || !project[fieldName]) {
      return res.status(404).send('ไม่พบรูปภาพ');
    }

    const imageBuffer = project[fieldName];
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
      'Content-Length': imageBuffer.length,
    });
    res.end(imageBuffer);
  } catch (err) {
    console.error(`❌ ${fieldName} fetch error:`, err);
    res.status(500).send('เกิดข้อผิดพลาดในการโหลดรูปภาพ');
  }
}

// 🚀 RUN SERVER
app.listen(3001, () => {
  console.log('🚀 Prisma API running at http://localhost:3001');
});
