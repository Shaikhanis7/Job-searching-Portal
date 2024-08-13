import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faHeartbeat, faDollarSign, faGraduationCap, faShoppingCart, faBullhorn, faHardHat, faHotel } from '@fortawesome/free-solid-svg-icons';
import video1 from '@/assets/videos/video1.mp4'; // Adjust the path as needed

const MainPageWrapper = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
  height: 100vh;
  overflow: hidden;
    flex-direction: column;
    display:flex;

`;
// const MainPageWrapper = styled.div`
//   text-align: center;
//   font-family: 'Roboto', sans-serif;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   overflow: hidden;
// `;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Header = styled.div`
  background-color: rgba(248, 249, 250, 0.8);
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
  position: relative;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #343a40;
`;

const ServicesSection = styled.div`
  margin-top: auto;
  padding: 30px 10px 100px; /* Adjust the bottom padding to move the circles up */
  position: relative;
  z-index: 1;
`;
const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
 
`;

const popIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;



const hoverEffect = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const ServiceCircle = styled.button`
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conten
  text-align: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${popIn} 0.5s ease-out;

  &:hover {
    animation: ${hoverEffect} 0.6s infinite;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 60px;
    color:black;
    margin-bottom: 10px;
  }

  p {
    position: relative;
    margin: 0;
    font-size: 18px;
    
    color: black;
    z-index: 1;
    
     /* Ensure the text is above the image */
  }
     
    
`;

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <MainPageWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Header>
        <HeaderTitle>JOB CATEGORIES</HeaderTitle>
      </Header>
      <ServicesSection>
        <ServicesContainer>
          <ServiceCircle onClick={() => handleNavigate('/tech-jobs')}>
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <p>Tech Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/healthcare-jobs')}>
            <FontAwesomeIcon icon={faHeartbeat} className="icon" />
            <p>Healthcare Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/finance-jobs')}>
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <p>Finance Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/education-jobs')}>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            <p>Education Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/retail-jobs')}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            <p>Retail Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/marketing-jobs')}>
            <FontAwesomeIcon icon={faBullhorn} className="icon" />
            <p>Marketing Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/construction-jobs')}>
            <FontAwesomeIcon icon={faHardHat} className="icon" />
            <p>Construction Jobs</p>
          </ServiceCircle>
          <ServiceCircle onClick={() => handleNavigate('/hospitality-jobs')}>
            <FontAwesomeIcon icon={faHotel} className="icon" />
            <p>Hospitality Jobs</p>
          </ServiceCircle>
        </ServicesContainer>
      </ServicesSection>
    </MainPageWrapper>
  );
};

export default Services;
