import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('❌ รหัสผ่านไม่ตรงกัน');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/register', form);
      if (res.data.success) {
        alert('✅ สมัครสมาชิกสำเร็จ');
        navigate('/');
      } else {
        alert(res.data.message || '❌ สมัครไม่สำเร็จ');
      }
    } catch (err) {
      console.error(err);
      alert('เกิดข้อผิดพลาดในการสมัครสมาชิก');
    }
  };

  return (
    <div className="bg-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="login-card"> {/* ✅ เปลี่ยนตรงนี้ */}

        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
            alt="Register Icon"
            style={{ width: '65px' }}
          />
          <h3 className="mt-3 fw-bold">สมัครสมาชิก</h3>
          <p className="text-white mb-0">กรุณากรอกข้อมูลด้านล่าง</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                name="firstName"
                placeholder="ชื่อ"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                name="lastName"
                placeholder="นามสกุล"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              placeholder="อีเมล"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              name="password"
              placeholder="รหัสผ่าน"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              name="confirmPassword"
              placeholder="ยืนยันรหัสผ่าน"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg w-100">สมัครสมาชิก</button>
        </form>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0">มีบัญชีอยู่แล้ว? <Link to="/" className="text-decoration-none">เข้าสู่ระบบ</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
