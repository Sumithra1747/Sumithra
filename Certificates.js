import React from 'react';
import Slider from 'react-slick';
import InterImage from '../assets/INTERNSHIP.jpeg';
import PythImage from '../assets/pyth.png';
import TCSImage from '../assets/tcs.png';
import PapImage from '../assets/pap.png';
import '../styles/Certificates.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


  

const Certificates = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };





  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 certificates at a time for better visibility
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Auto-slide for more dynamic interaction
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pause the autoplay on hover for better UX
  };

  return (
    <div className="cert">
      <h1 className="cert-title">My Certificates</h1>



      
      
      <Slider {...settings}>
        <div className="cert-item">
          <img src={InterImage} alt="Internship Certificate" className="cert_image" />
        </div>
        <div className="cert-item">
          <img src={PythImage} alt="Python for Data Science Certificate" className="cert_image" />
        </div>
        <div className="cert-item">
          <img src={TCSImage} alt="TCS iON Career Edge Certificate" className="cert_image" />
        </div>
        <div className="cert-item">
          <img src={PapImage} alt="Paper Presentation Certificate" className="cert_image" />
        </div>
      </Slider>


      <div className='c1'>
        <p><a href="mailto:sumithrak1747@gmail.com" className="c_link">sumithrak1747@gmail.com</a></p>
        <p><a href="tel:9061761747" className="c_link">Call me</a></p>
        <p><a  href="https://www.linkedin.com/in/sumithra-k-361a47279/" className="c_link">LinkedIn</a></p>

      </div>
      <div className="next-page-loader" onClick={handleClick}>
        
        <FontAwesomeIcon icon={faSpinner} size="2x" />
      
      </div>
    </div>
  );
};

export default Certificates;
