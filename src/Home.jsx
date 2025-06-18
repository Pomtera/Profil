import './Home.css';
import { useEffect, useRef, useState } from 'react';
import logoImage from './assets/CHUCKY.png';
import futureImage from './assets/BBBG.jpg';
import proImage from './assets/Pro.jpg';
import BOX1Image from './assets/BOX1.jpg';
import OTMImage from './assets/OTM.jpg';
import contactImage from './assets/BBG.png';

function Home() {
  const aboutImgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const hasRun = useRef(false);
  // Observer animation
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (aboutImgRef.current) observer.observe(aboutImgRef.current);

    return () => {
      if (aboutImgRef.current) observer.unobserve(aboutImgRef.current);
    };
  }, []);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const visits = localStorage.getItem('visitCount');
    const newCount = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  return (
    <>
      {/* 🔶 ส่วนบนของหน้า */}
      <div className="split-container">
        <div className="left-panel">
          <div className="left-content">
            <h1 className="typewriter-line1">Welcome to Portfolio</h1>
            <h2 className="typewriter-line2">By Kriskorn Panyaporn Ter</h2>
            <a href="/Profile" className="read-btn">≫ Read</a>
          </div>
        </div>

        <div id="PPa" className="right-panel">
          <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container-fluid px-5">
              <a className="navbar-brand fw-bold text-white d-flex align-items-center" href="#">
                <img src={logoImage} alt="Logo" height="60" className="me-2" />
                MyPortfolio
              </a>

              <button
                className="navbar-toggler text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-center gap-4 nav-menu-right">
                  <li className="nav-item"><a className="nav-link text-white fw-medium" href="#PPa">PROFILE</a></li>
                  <li className="nav-item"><a className="nav-link text-white fw-medium" href="#more-content">PROJECT</a></li>
                  <li className="nav-item"><a className="nav-link text-white fw-medium" href="#contact">CONTACT</a></li>
                  <li className="nav-item"><a className="nav-link text-danger fw-medium" href="/">LOGOUT</a></li>
                  <li className="nav-item">
                    <a className="btn btn-outline-warning fw-bold px-3 py-2" href="/Resume.pdf" download>Download PDF</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>




          <div className="right-content">
            <img src={futureImage} className="future-image" alt="Future" />
          </div>
        </div>
      </div>


      <section id="more-content" className="more-section">
        <div className="section-inner about-me">
          <h1>Project</h1>
          <div className="about-me-content">
            <img
              ref={aboutImgRef}
              src={proImage}
              className={`about-me-image ${isVisible ? 'visible' : ''}`}
              alt="About Me"
            />

            <div className="info-box">
              <img src={BOX1Image} className={`box-image ${isVisible ? 'visible' : ''}`} alt="Box1" />
              <h3>Water Temperature Reducer from Thermoelectric Cooling System</h3>
              <p>This research explores the use of thermoelectric cooling to reduce water temperature efficiently...</p>
              <a href="Project1" className="orange-btn">≫ Read</a>
            </div>

            <div className="text-block-right">
              <img src={OTMImage} className={`box-image ${isVisible ? 'visible' : ''}`} alt="OTM" />
              <h2>Space Reduction Heuristic for Thermal Unit Commitment</h2>
              <p>UC problem is crucial in energy systems. This heuristic method improves optimization efficiency...</p>
              <a href="Project2" className="orange-btn">≫ Read</a>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="contact-section-orange">
        <h1>Contact Me</h1>
        <div className="contact-flex-container">

          <div className="contact-text left-text">

            <h2>Are you interested in<br /> getting in touch with me?</h2>
          </div>

          <div className="contact-image-center">
            <img src={contactImage} alt="Contact Me" className="contact-img" />
          </div>

          <div className="contact-text right-text">
            <h2>Click this button to follow<br /> me on all platforms!</h2>
            <a href="Contact" className="read-btn-black">≫ Click</a>
          </div>
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

export default Home;
