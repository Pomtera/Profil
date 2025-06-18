import logoImage from './assets/CHUCKY.png';
import OROImage from './assets/ORO.jpg';
import './Profile.css';
import KTCMImage from './assets/KTCM.png';
import RAMImage from './assets/RAM.png';
import PYImage from './assets/PY.png';
import MYSKILLImage from './assets/MYSKILL.png';
import ArduinoImage from './assets/Arduino.png';
import PythonImage from './assets/Python.png';
import HTMLImage from './assets/HTML.png';
import JVSImage from './assets/JVS.png';
import cssImage from './assets/css.png';
import RubyImage from './assets/Ruby.png';
import phpImage from './assets/php.png';
import sqlImage from './assets/sql.png';
import APITECHImage from './assets/APITECH.png';
import PTTImage from './assets/PTT.png';
import { useEffect, useRef, useState } from 'react';


function Profile() {
  const [visitCount, setVisitCount] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [jvsProgress, setJvsProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [phpProgress, setPhpProgress] = useState(0);
  const [rubyProgress, setRubyProgress] = useState(0);
  const [sqlProgress, setSqlProgress] = useState(0);
  const sqlProgressRef = useRef(null);
  const rubyProgressRef = useRef(null);
  const phpProgressRef = useRef(null);
  const cssProgressRef = useRef(null);
  const jvsProgressRef = useRef(null);
  const htmlProgressRef = useRef(null);
  const hasRun = useRef(false);
  const progressRef = useRef(null);
  const pythonProgressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSqlProgress(50); // เปอร์เซ็นต์ที่ต้องการ
        } else {
          setSqlProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (sqlProgressRef.current) {
      observer.observe(sqlProgressRef.current);
    }

    return () => {
      if (sqlProgressRef.current) observer.unobserve(sqlProgressRef.current);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateRubyProgress(50); // ปรับเปอร์เซ็นต์ตามต้องการ
        } else {
          setRubyProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (rubyProgressRef.current) {
      observer.observe(rubyProgressRef.current);
    }

    return () => {
      if (rubyProgressRef.current) observer.unobserve(rubyProgressRef.current);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePhpProgress(60); // ปรับเปอร์เซ็นต์ตามต้องการ
        } else {
          setPhpProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (phpProgressRef.current) {
      observer.observe(phpProgressRef.current);
    }

    return () => {
      if (phpProgressRef.current) observer.unobserve(phpProgressRef.current);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCssProgress(65); // เปอร์เซ็นต์เป้าหมาย
        } else {
          setCssProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (cssProgressRef.current) {
      observer.observe(cssProgressRef.current);
    }

    return () => {
      if (cssProgressRef.current) observer.unobserve(cssProgressRef.current);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateJvsProgress(70); // เปอร์เซ็นต์ตามที่ต้องการ
        } else {
          setJvsProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (jvsProgressRef.current) {
      observer.observe(jvsProgressRef.current);
    }

    return () => {
      if (jvsProgressRef.current) observer.unobserve(jvsProgressRef.current);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateHtmlProgress(75); // ปรับเปอร์เซ็นต์ตามต้องการ
        } else {
          setHtmlProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (htmlProgressRef.current) {
      observer.observe(htmlProgressRef.current);
    }

    return () => {
      if (htmlProgressRef.current) observer.unobserve(htmlProgressRef.current);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePythonProgress(70); // เปลี่ยนค่าตามต้องการ
        } else {
          setPythonProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (pythonProgressRef.current) {
      observer.observe(pythonProgressRef.current);
    }

    return () => {
      if (pythonProgressRef.current) observer.unobserve(pythonProgressRef.current);
    };
  }, []);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress(85);
        } else {
          setProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, []);

  const animatePythonProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setPythonProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };

  const animatePhpProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setPhpProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };


  const animateProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setProgress(current);
        current++;
        setTimeout(step, 20); // ← วิ่งแบบชัดเจน
      }
    };

    step();
  };

  const animateRubyProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setRubyProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };


  const animateHtmlProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setHtmlProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };

  const animateJvsProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setJvsProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };

  const animateCssProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setCssProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };

  const animateSqlProgress = (target) => {
    let current = 0;

    const step = () => {
      if (current <= target) {
        setSqlProgress(current);
        current++;
        setTimeout(step, 20);
      }
    };

    step();
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold text-white d-flex align-items-center" href="Home">
            <img id="EDU" src={logoImage} alt="Logo" height="60" className="me-2" />
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
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="#N">NAME</a></li>
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="#D">EDUCATION</a></li>
              <li className="nav-item"><a className="nav-link text-white fw-medium" href="#SKK">MYSKIL</a></li>
              <li className="nav-item"><a className="nav-link text-danger fw-medium" href="#WO">WORK</a></li>
              <li className="nav-item"><a className="nav-link text-danger fw-medium" href="/">Logout</a></li>
              <li className="nav-item">
                <a className="btn btn-outline-warning fw-bold px-3 py-2" href="/Resume.pdf" download>Download PDF</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="underline"></div>


      <div className="content-container">
        <div id="N" className="centered-image-container">
          <img id="N" src={OROImage} alt="Centered Logo" className="centered-logo" />
        </div>
        <div className="text-container">
          <p style={{ color: '#FFA500' }}>KRISKORN</p>
        </div>
        <div className="text-containerr">
          <p style={{ color: '#FFA500' }}>PANYAPORN</p>
        </div>
        <div className="text-containerrr">
          <p>Hello i'm Peter. 25 years old. I have a strong passion for programming  </p>
        </div>
      </div>
      <div className="text-containerrrr">
        <p>and take great joy in continuously learning new technologies. I thrive in </p>
      </div>
      <div className="text-containerrrrr">
        <p>collaborative in collaborative environments and truly enjoy being part </p>
      </div>
      <div className="text-containerrrrrrr">
        <p >of a high-performing team.</p>
      </div>

      <div id="D" className="tx">
      </div>



      <div className="KTCMBG">
        <div className="KTCM">
          <img src={KTCMImage} alt="KT" className="KTCMPG" />
        </div>
        <div className="PY">
          <img src={PYImage} alt="P" className="PYPG" />
        </div>
        <div id="ED" className="text-PY">
          <p style={{ color: '#000' }}>EDUCA</p>
        </div>

        <div className="text-PYY">
          <p style={{ color: '#fff' }}>TION</p>
        </div>
        <div className="text-KTCM">
          <p style={{ color: '#000' }}>Kanchanaphisek Technical College Mahanakorn</p>
        </div>
        <div className="text-KTCMs">
          <p style={{ color: '#000' }}>Information Technology -  GPA 3.57</p>
        </div>
        <div className="text-KTCMss">
          <p style={{ color: '#000' }}>2019-2021</p>
        </div>
        <div className="RAM">
          <img src={RAMImage} alt="RA" className="RAMPG" />
        </div>
        <div className="text-RAM">
          <p style={{ color: '#fff' }}>Ramkhamhaeng University</p>
        </div>
        <div className="text-RAMs">
          <p style={{ color: '#fff' }}>Computer Engineering  </p>
        </div>
        <div className="text-RAMss">
          <p style={{ color: '#fff' }}>2024 </p>
        </div>
      </div>

    <div className='green-divider'></div>

      <div id="SKK" className="MYSKILL">
        <img src={MYSKILLImage} alt="SK" className="MSKPG" />
      </div>
      <div className="text-MS">
        <p style={{ color: '#fff' }}>MYS</p>
      </div>
      <div className="text-MSs">
        <p style={{ color: '#000' }}>KILL</p>
      </div>

      <img src={ArduinoImage} alt="ar" className="ArduinoPG" />
      <h3 className="arduino-title">ARDUINO IDE</h3>
      <div className="arduino-progress-container" ref={progressRef}>
        <div
          className="arduino-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="ard">{progress}%</div>


      <img src={PythonImage} alt="py" className="PythonPG" />
      <h3 className="python-title">PYTHON</h3>
      <div className="python-progress-container" ref={pythonProgressRef}>
        <div
          className="python-progress-bar"
          style={{ width: `${pythonProgress}%` }}
        ></div>
      </div>
      <div className="python-percent-below">{pythonProgress}%</div>


      <img src={HTMLImage} alt="ht" className="HTMLPG" />
      <h3 className="html-title">HTML</h3>
      <div className="html-progress-container" ref={htmlProgressRef}>
        <div
          className="html-progress-bar"
          style={{ width: `${htmlProgress}%` }}
        ></div>
      </div>
      <div className="html-percent-below">{htmlProgress}%</div>


      <img src={JVSImage} alt="jvs" className="JVSPG" />
      <h3 className="jvs-title">JAVASCRIPT</h3>
      <div className="jvs-progress-container" ref={jvsProgressRef}>
        <div
          className="jvs-progress-bar"
          style={{ width: `${jvsProgress}%` }}
        ></div>
      </div>
      <div className="jvs-percent-below">{jvsProgress}%</div>


      <div className="MYSKILLs">
        <img src={cssImage} alt="cs" className="cssPG" />
        <h3 className="css-title">CSS</h3>
        <div className="css-progress-container" ref={cssProgressRef}>
          <div
            className="css-progress-bar"
            style={{ width: `${cssProgress}%` }}
          ></div>
        </div>
        <div className="css-percent-below">{cssProgress}%</div>


        <img src={phpImage} alt="ph" className="phpPG" />
        <h3 className="php-title">PHP</h3>
        <div className="php-progress-container" ref={phpProgressRef}>
          <div
            className="php-progress-bar"
            style={{ width: `${phpProgress}%` }}
          ></div>
        </div>
        <div className="php-percent-below">{phpProgress}%</div>


        <img src={RubyImage} alt="ru" className="RubyPG" />
        <h3 className="Ruby-title">RUBY</h3>
        <div className="Ruby-progress-container" ref={rubyProgressRef}>
          <div
            className="Ruby-progress-bar"
            style={{ width: `${rubyProgress}%` }}
          ></div>
        </div>
        <div className="Ruby-percent-below">{rubyProgress}%</div>


        <img src={sqlImage} alt="sq" className="sqlPG" />
        <h3 className="sql-title">MY SQL</h3>
        <div className="sql-progress-container" ref={sqlProgressRef}>
          <div
            className="sql-progress-bar"
            style={{ width: `${sqlProgress}%` }}
          ></div>
        </div>
        <div className="sql-percent-below">{sqlProgress}%</div>

      </div >

 <div className='green-divider'></div>

      <div id="WO" className="WORK">
        <img src={APITECHImage} alt="API Logo" className="API-logo" />
      </div>
      <div className="Name-api">WEB DEVELOPER</div>
      <div className="Name-apii">June – November 2022 in APITech Co., Ltd.  </div>
      <div className="Name-apiii">Responsible for updating and developing websites as assigned
        by supervisors using the WordPress  </div>
      <div className="Name-apiiii">platform, as well as maintaining and servicing computer equipment and IT systems within the organization. </div>
      <div className="word-text">WO</div>
      <div className="word-textt">RK EXPERIE</div>
      <div className="word-texttt">NCE</div>

      <div className="WORKs">
        <img src={PTTImage} alt="PT Logo" className="PTT-logo" />
      </div>
      <div className="Name-PT">IT SUPPORT</div>
      <div className="Name-PTT"> Responsible for maintaining and facilitating the efficient use of computers and IT systems  within the  </div>
      <div className="Name-PTTT"> organization. This includes monitoring, diagnosing, and resolving technical issues to ensure    </div>
      <div className="Name-PTTTT">  smooth and uninterrupted workflow for all employees, thereby minimizing any potential disruptions to    </div>
      <div className="Name-PTTTTT"> organizational operations.  </div>
      <div className="Name-PTTTTTT"> March – April 2020 in PT Motor Car Co., Ltd.  </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Kriskorn Panyaporn Ter</h3>
            <p>Creating with code & creativity.</p>
          </div>

          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#more-content">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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

export default Profile;