import React from 'react';
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
  display: flex;
  flex-direction: column;
`;

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
  // margin-top: auto;
  padding: 30px 10px 100px;
  position: relative;
  z-index: 1;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
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
const ServiceCircle = styled.div`
  background-color: rgba(255, 255, 255, 0.8); // Set background color with transparency
  border: 2px solid black;
  border-radius: 50%;
  width: 230px; 
  height: 230px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${popIn} 0.5s ease-out;

  &:hover {
    animation: ${hoverEffect} 0.6s infinite;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 80px; 
    color: black;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: black;
    line-height: 1.2;
    padding: 0 5px;
  }

  p:last-of-type {
    margin-top: 5px;
  }
`;


const Services = () => {
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
          <ServiceCircle>
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <p>Tech Jobs</p>
            <p>Software development, IT support, and more.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faHeartbeat} className="icon" />
            <p>Healthcare Jobs</p>
            <p>Doctors, nurses, medical technicians, etc.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <p>Finance Jobs</p>
            <p>Accountants, financial analysts, bankers.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            <p>Education Jobs</p>
            <p>Teachers, professors, educational administrators.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            <p>Retail Jobs</p>
            <p>Store managers, sales associates, cashiers.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faBullhorn} className="icon" />
            <p>Marketing Jobs</p>
            <p>Marketing managers, SEO specialists, PR experts.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faHardHat} className="icon" />
            <p>Construction Jobs</p>
            <p>Engineers, architects, construction workers.</p>
          </ServiceCircle>
          <ServiceCircle>
            <FontAwesomeIcon icon={faHotel} className="icon" />
            <p>Hospitality Jobs</p>
            <p>Hotel managers, chefs, front desk staff.</p>
          </ServiceCircle>
        </ServicesContainer>
      </ServicesSection>
    </MainPageWrapper>
  );
};

export default Services;
