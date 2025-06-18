import logoImage from './assets/CHUCKY.png';
import InstaImage from './assets/Insta.png';
import FaceImage from './assets/face.png';
import LineImage from './assets/Line.png';
import PhoneImage from './assets/Phone.png';

import './Contact.css';
import { useState, useEffect } from 'react';


function Contact() {
  const [visitCount, setVisitCount] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      setStatus(result.message);
      if (result.success) {
        setForm({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      setStatus('❌ เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold text-white d-flex align-items-center" href="HOME">
            <img href="/" src={logoImage} alt="Logo" height="60" className="me-2" />
            MyPortfolio
          </a>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-4 nav-menu-right">
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="Profile">PROFILE</a></li>
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="#D">PROJECT</a></li>
              <li className="nav-item"><a className="nav-link text-danger fw-medium" href="/">LOGOUT</a></li>
              <li className="nav-item"><a className="btn btn-outline-warning fw-bold px-3 py-2" href="/Resume.pdf" download>Download PDF</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="BGCT" id="contact">
        <div className="contact-form-container">
          <p className="form-title">Contact Us Form</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-control" value={form.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" id="phone" name="phone" className="form-control" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-control" rows="4" value={form.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-warning fw-bold px-4">Send</button>
          </form>

          {status && (
            <div className="status-message mt-3">
              <span>{status}</span>
            </div>
          )}
        </div>
      </section>

      <section className="MAP">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.4671758676154!2d100.9316068!3d13.8109627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6dab0c1e5da3%3A0xe8648647c1334a5!2z4LiL4Lit4LiiIOC4quC4uOC4p-C4tOC4meC4l-C4p-C4h-C4qOC5jCA1OSDguYHguILguKfguIfguIHguKPguLDguJfguLjguYjguKHguKPguLLguKIg4LmA4LiC4LiV4Lir4LiZ4Lit4LiH4LiI4Lit4LiBIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDUzMA!5e0!3m2!1sth!2sth!4v1750173591448!5m2!1sth!2sth"
          width="800"
          height="580"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="Insta">
          <a href="https://www.instagram.com/kskter_/" target="_blank" rel="noreferrer">
            <img src={InstaImage} alt="Instagram" />
            <p className='IN'>kskter_</p>
          </a>
        </div>


        <div className="Facebook">
          <a href="https://www.facebook.com/pomtam.love" target="_blank" rel="noreferrer">
            <img src={FaceImage} alt="Facebook" />
            <p className='Face'>KRISKORN PANYAPORN</p>
          </a>
        </div>

        <div className="Line">
          <a href="https://line.me/ti/p/~Pomter" target="_blank" rel="noreferrer">
            <img src={LineImage} alt="Line" />
            <p className='LI'>ID:Pomter</p>
          </a>
        </div>

        <div className="Phone">
          <a href="tel:0970639263">
            <img src={PhoneImage} alt="Line" />
            <p className='Ph'>Tel:0970639263</p>
          </a>
        </div>


      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Kriskorn Panyaporn Ter</h3>
            <p>Creating with code & creativity.</p>
          </div>

          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="HOME">Home</a></li>
              <li><a href="HOME">Projects</a></li>
              <li><a href="HOME">Contact</a></li>
              <li><a href="/Resume.pdf" download>Download Resume</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/pomtam.love" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/kskter_/" target="_blank" rel="noreferrer">Instagram</a>
              <p>+66970639263</p>
            </div>
          </div>

          <div className="footer-visits">
            <h4>👁 Visitors</h4>
            <p>{visitCount.toLocaleString()} visits</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kriskorn Panyaporn Ter. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;
