import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import VehImage from '../assets/veh.png';
import AppImage from '../assets/app.png';
import V1Image from '../assets/v.jpeg';
import InImage from '../assets/INTERNSHIP.jpeg'
import '../styles/Works.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Works = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const handleClick = () => {
    navigate('/certificates');
  };

  return (
    <div className="m">
      <div className="work">
        <div className="w1">
          <h4><b>SpotOnAlert</b></h4>
          <p>SpotOnAlert System enhances road safety by providing real-time alerts about potential 
            accident spots. It includes a user-friendly application that opens with a shake and features 
            a one-tap emergency call button and a help button to send alerts.</p>
          <h5 onClick={() => handleToggle('spotOnAlert')} style={{ cursor: 'pointer', color: '#ea0879' }}>
            Read more
          </h5>
        </div>

        <div className="w1">
          <h4><b>HelpHand24</b></h4>
          <p>It is a mini version of SpotOnAlert, retaining the core functionality while being more lightweight and user-friendly.
            The application is ideal for users seeking a simplified solution without compromising on essential safety features.</p>
          <h5 onClick={() => handleToggle('helpHand24')} style={{ cursor: 'pointer', color: '#ea0879' }}>
            Read more
          </h5>
        </div>

        <div className="w1">
          <h4><b>Internship</b></h4>
          <p>I attended an internship program at Neurobots Pvt. Ltd. where I gained valuable experience and skills as a Junior Software Developer.</p>
          <h5 onClick={() => handleToggle('internship')} style={{ cursor: 'pointer', color: '#ea0879' }}>
            Read more
          </h5>
        </div>
      </div>

      <div className="next-page-loader" onClick={handleClick}>
        <FontAwesomeIcon icon={faSpinner} size="2x" />
      </div>

      {visibleSection === 'spotOnAlert' && (
        <div className="p1 spotOnAlert">
          <p>SpotOnAlert System enhances road safety by providing real-time alerts about potential 
            accident spots. It includes a user-friendly application that opens with a shake and features 
            a one-tap emergency call button and a help button to send alerts via WhatsApp. The hardware 
            component uses a remote-controlled vehicle with MPU6050 and LM35 sensors to detect accidents 
            by monitoring acceleration, orientation, and temperature. Upon detection, it automatically 
            sends alerts to a registered phone number using a GSM module or Twilio, offering a comprehensive 
            solution for road safety. The system also provides real-time location tracking to guide emergency 
            services to the accident site promptly. Additionally, it logs data for post-accident analysis 
            to help prevent future incidents.</p>
          <img src={VehImage} className="veh_img" alt="Vehicle" />
          <img src={AppImage} className="app_img" alt="App" />
        </div>
      )}

      {visibleSection === 'helpHand24' && (
        <div className="p1 helpHand24">
          <p>Developed a streamlined version of SpotOnAlert, 
          an automated system designed to detect accidents. This compact application focuses on a single, 
          crucial feature: sending alerts to a registered phone number upon detecting an accident.
          It is a mini version of SpotOnAlert, retaining the core functionality while being more lightweight and user-friendly.
          The application is ideal for users seeking a simplified solution without compromising on essential safety features.</p>
       
          <img src={V1Image} className="veh_img" alt="veh_img" />
       
        </div>
      )}

      {visibleSection === 'internship' && (
        <div className="p1 internship">
          <p>I attended an internship program at Neurobots Pvt. Ltd. where I gained valuable experience and skills as a Junior Software Developer.
          The certificate acknowledges my role as a Junior Software Developer, highlighting my contributions and successful participation.
          This achievement reflects my dedication to learning and professional growth.
          </p>
          <img src={InImage} className="veh_img" />
        </div>
      )}
    </div>
  );
};

export default Works;
