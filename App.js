import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Next from './components/Next';
import AboutMe from './components/AboutMe'; // Corrected import name
import Works from './components/Works';
import Certificates from './components/Certificates';
import Academics from './components/Academics';
import '@fortawesome/fontawesome-svg-core/styles.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/works" element={<Works />} />
        <Route path="/certificates" element={<Certificates />} />
        
      </Routes>
    </Router>
  );
};

export default App;
