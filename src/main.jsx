import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Register from './Register.jsx'; 
import Home from './Home.jsx'; 
import Profile from './Profile.jsx'; 
import Contact from "./Contact.jsx";
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
