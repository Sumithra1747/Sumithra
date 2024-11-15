import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.scss';
import profileImage from '../assets/profile.png';
import Callimage from '../assets/call.png';
import Linkimage from '../assets/lin.png';
import Mailimage from '../assets/mail.png';
import GetImage from '../assets/get.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/next');
  };

  return (
    <div className="header">
      <div className="left_side">
        <h2>HELLO, I AM</h2>
        <h3>SUMITHRA K</h3>
        <p>IT engineer passionate about creating impactful tech solutions</p>
        <div className="image_container">
          <img src={GetImage} className="get_img" alt="Get In Touch" />
          <div className="contact_links">
            <a href="mailto:sumithrak1747@gmail.com" className="contact_link">
              <img src={Mailimage} alt="Mail" className="contact_icon" />
            </a>
            <a href="tel:9061761747" className="contact_link">
              <img src={Callimage} alt="Call" className="contact_icon" />
            </a>
            <a href="https://www.linkedin.com/in/sumithra-k-361a47279/" className="contact_link">
              <img src={Linkimage} alt="LinkedIn" className="contact_icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="right_side">
        <img src={profileImage} alt="Profile" className="profile_image" />
      </div>
      <div className="next_page_loader" onClick={handleClick}>
        <FontAwesomeIcon icon={faSpinner} size="2x" />
      </div>
    </div>
  );
};

export default Home;
