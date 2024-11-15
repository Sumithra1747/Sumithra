import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import P1Image from '../assets/p1.png';
import P2Image from '../assets/p2.jpg';
import P3Image from '../assets/p3.png';
import P4Image from '../assets/p4.jpg';

import P5Image from '../assets/p5.jpg';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/Next.scss'; // Ensure you have styles for the Next component

const Next = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="next-page">
      <div className="links-container">
        <Link to="/aboutme" className="next_h"><div className='div'><img src={P1Image} className='pimage'></img></div></Link>
        
        <Link to="/works" className="next_h"><div className='div'><img src={P3Image} className='pimage'></img></div></Link>
        <Link to="/certificates" className="next_h"><div className='div'><img src={P2Image} className='pimage'></img></div></Link>
      </div>
      <div className="back-button blinking" onClick={handleBackClick}>
      <FontAwesomeIcon icon={faSpinner} size="2x" />

      </div>
    </div>
  );
};

export default Next;
