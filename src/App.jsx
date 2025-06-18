import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link, useNavigate } from 'react-router-dom'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/login', { email, password });
      if (res.data.login) {
        alert('เข้าสู่ระบบสำเร็จ ✅');
        navigate('/home'); 
      } else {
        alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง ❌');
      }
    } catch (err) {
      console.error(err);
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
    }
  };

  return (
    <div className="main-container">
      <div className="left-half"></div>

      <div className="right-half">
        <div className="login-card">
          <div className="text-center">
            <img src="/user.png" alt="User Icon" className="user-icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">อีเมล</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>


            <button type="submit" className="btn-primary">เข้าสู่ระบบ</button>
          </form>

          <hr className="my-4" />
          <div className="register-link">
            ยังไม่มีบัญชี? <Link to="/register">สมัครสมาชิก</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
