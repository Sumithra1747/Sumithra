import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaGraduationCap, FaSchool, FaStar } from 'react-icons/fa';
import MyImage from '../assets/my.jpg';
import '../styles/AboutMe.scss';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/works');
  };

  return (
    <div className="about-me">
      <div className="content-wrapper">
        <div className="r1">
          <img src={MyImage} alt="Profile" className="profile-image" />
        </div>

        <div className="second">
          <p className="about-me-text">
            <b>
              A software enthusiast with a strong academic record and a passion for developing innovative software solutions. 
              Dedicated to continuous learning and improvement, committed to advancing skills to create impactful and state-of-the-art technologies.
            </b>
          </p>
          <p className="about-me-text">
            <b>
              Being an IT graduate, I have excelled academically, consistently achieving top grades in my coursework and projects.
              My strong academic record reflects my dedication to mastering complex concepts and technologies.
            </b>
          </p>
        </div>

        <div className="next-page-loader" onClick={handleClick}>
        
          <FontAwesomeIcon icon={faSpinner} size="2x" />
        
        </div>
      </div>

      <div className="details">
        <div className="d1">
          <h4><FaGraduationCap /> Education</h4>
          <ul>
            <li>Bachelor of Technology
              <ul>
                <li>Information Technology</li>
                <li>CGPA: 8.91</li>
              </ul>
            </li>
            <li>Higher Secondary
              <ul>
                <li>Science</li>
                <li>Percentage: 96.4%</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="d1">
          <h4><FaStar /> Skills</h4>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="d1">
          <h4><FaSchool /> Languages</h4>
          <ul>
            <li>English</li>
            <li>Malayalam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
