import { useRef, useState, useEffect } from 'react';
import logoImage from './assets/CHUCKY.png';
import './Project1.css';
import axios from 'axios';

function Project1() {
  const aboutImgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [form, setForm] = useState({}); 
  const [projects, setProjects] = useState([]);

   useEffect(() => {
    axios.get('http://localhost:3001/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error('❌ Error fetching projects:', err);
      });
  }, []);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="Contact">CONTACT</a></li>
              <li className="nav-item"><a className="nav-link text-danger fw-medium" href="/">LOGOUT</a></li>
              <li className="nav-item"><a className="btn btn-outline-warning fw-bold px-3 py-2" href="/Resume.pdf" download>Download PDF</a></li>
            </ul>
          </div>
        </div>
      </nav>


<section className="Data pt-5 mt-5">
  <div className="container">
    {projects
      .filter(project => project.id === 1)  
      .map((project) => (
        <div key={project.id} className="mb-5 pb-5 border-bottom text-white">


          <div className="text-center mb-4">
            <h2 className="mb-3">{project.title}</h2>
          </div>


          <div className="mb-4 d-flex justify-content-center">
            <img
              className="img-fluid rounded shadow"
              src={`http://localhost:3001/image/${project.id}`}
              alt={`project ${project.id} image1`}
              onError={(e) => (e.target.src = '/fallback.jpg')}
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%', maxWidth: '600px' }}
            />
          </div>


          <div className="text-center mb-4">
            <p>{project.description}</p>
          </div>

    
          {project.code && (
            <div className="mb-4">
              <h5>Source Code:</h5>
              <pre className="bg-dark p-3 rounded text-white" style={{ whiteSpace: 'pre-wrap' }}>
                {project.code}
              </pre>
            </div>
          )}


          <div className="d-flex flex-column align-items-center gap-3 mt-4">
            {[2, 3, 4].map((num) => (
              <img
                key={num}
                className="img-fluid rounded shadow"
                src={`http://localhost:3001/image${num}/${project.id}`}
                alt={`project ${project.id} image${num}`}
                onError={(e) => (e.target.src = '/fallback.jpg')}
                style={{ maxHeight: '1000px', objectFit: 'cover', width: '80%' }}
              />
            ))}
          </div>

        </div>
      ))}
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

export default Project1;
