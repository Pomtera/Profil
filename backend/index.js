const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myapp',
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connect failed:', err);
  } else {
    console.log('✅ DB connected!');
  }
});

// 🔐 LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.error('❌ Login query error:', err);
        return res.status(500).send({ login: false, message: 'Server error' });
      }

      if (results.length > 0) {
        res.send({ login: true, user: results[0] });
      } else {
        res.send({ login: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง ❌' });
      }
    }
  );
});

// 📝 REGISTER
app.post('/register', (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  // ตรวจสอบข้อมูลครบถ้วน
  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return res.status(400).send({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  // ตรวจสอบรหัสผ่านตรงกัน
  if (password !== confirmPassword) {
    return res.status(400).send({ success: false, message: '❌ รหัสผ่านไม่ตรงกัน' });
  }

  // ตรวจสอบอีเมลซ้ำ
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('❌ Email check error:', err);
      return res.status(500).send({ success: false, message: 'เกิดข้อผิดพลาดในการเช็คอีเมล' });
    }

    if (results.length > 0) {
      return res.status(400).send({ success: false, message: 'อีเมลนี้ถูกใช้งานแล้ว ❌' });
    }

    // เพิ่มผู้ใช้ใหม่
    db.query(
      'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
      [email, password, firstName, lastName],
      (err, result) => {
        if (err) {
          console.error('❌ Insert error:', err);
          return res.status(500).send({ success: false, message: 'ไม่สามารถบันทึกข้อมูลผู้ใช้ได้' });
        }

        res.send({ success: true, message: '✅ สมัครสมาชิกสำเร็จ' });
      }
    );
  });
});

// 📨 CONTACT FORM API
app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).send({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  db.query(
    'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)',
    [name, email, phone, message],
    (err, result) => {
      if (err) {
        console.error('❌ Insert contact error:', err);
        return res.status(500).send({ success: false, message: 'ไม่สามารถส่งข้อความได้' });
      }

      res.send({ success: true, message: '✅ ข้อความถูกส่งเรียบร้อยแล้ว' });
    }
  );
});

// ✅ ดึงข้อมูลโปรเจกต์ทั้งหมด พร้อม 4 รูป (BLOB) และ code
app.get('/projects', (req, res) => {
  db.query('SELECT id, title, description, code FROM projects', (err, results) => {
    if (err) {
      console.error('❌ Fetch projects error:', err);
      return res.status(500).json({ success: false, message: 'ไม่สามารถดึงข้อมูลโปรเจกต์ได้' });
    }

    res.json(results);
  });
});

// ✅ ส่งรูปภาพตาม id → image1
app.get('/image/:id', (req, res) => serveImageField(req, res, 'image'));
// ✅ ส่ง image2
app.get('/image2/:id', (req, res) => serveImageField(req, res, 'image2'));
// ✅ ส่ง image3
app.get('/image3/:id', (req, res) => serveImageField(req, res, 'image3'));
// ✅ ส่ง image4
app.get('/image4/:id', (req, res) => serveImageField(req, res, 'image4'));

// ✅ ฟังก์ชันช่วยดึงรูปภาพจากฟิลด์ที่กำหนด
function serveImageField(req, res, fieldName) {
  const projectId = req.params.id;
  db.query(`SELECT ${fieldName} FROM projects WHERE id = ?`, [projectId], (err, results) => {
    if (err) {
      console.error(`❌ ${fieldName} fetch error:`, err);
      return res.status(500).send('เกิดข้อผิดพลาดในการโหลดรูปภาพ');
    }

    if (results.length === 0 || !results[0][fieldName]) {
      return res.status(404).send('ไม่พบรูปภาพ');
    }

    const imageBuffer = results[0][fieldName];
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
      'Content-Length': imageBuffer.length,
    });
    res.end(imageBuffer);
  });
}


// 🚀 เปิดเซิร์ฟเวอร์
app.listen(3001, () => {
  console.log('🚀 Server is running on http://localhost:3001');
});

