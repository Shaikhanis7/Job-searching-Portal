import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBuilding, FaRocket, FaAward, FaCode, FaUsers, FaClipboardList, FaChartLine, FaProjectDiagram, FaGraduationCap, FaChartBar } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 20px;
  background-color: black;
`;

const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const NavButton = styled.button`
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  color: #4a5568;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #e2e8f0;
  }
  svg {
    margin-right: 8px;
  }
`;

const CompaniesSection = styled.div`
  text-align: center;
`;

const CompaniesTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CompaniesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CompanyCategory = styled.div`
  width: 200px;
  margin: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CompanyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 5px;
`;

const cardData = [
  { id: 1, company: 'Persistent', rating: 3.7, reviews: '3.3K+', description: 'Trusted global solutions company.' },
  { id: 2, company: 'Jio', rating: 4.0, reviews: '20.6K+', description: 'True 5G is here to unlock the limitless era.' },
  { id: 3, company: 'Genpact', rating: 3.9, reviews: '27.3K+', description: 'Global professional services firm.' },
  { id: 4, company: 'Cognizant', rating: 3.9, reviews: '44.1K+', description: 'Leading ITeS company with global presence.' },
  { id: 5, company: 'VXI Global', rating: 3.4, reviews: '1.2K+', description: 'No. 1 Customer Experience Provider.' },
  // Add more card data as needed
];

const cardStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  textAlign: 'center',
  backgroundColor: 'black',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const Card = ({ company, rating, reviews, description }) => (
  <div style={cardStyle}>
    <h3>{company}</h3>
    <p>Rating: {rating} | Reviews: {reviews}</p>
    <p>{description}</p>
    <button 
      style={buttonStyle}
      onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
      onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
    >
      View Jobs
    </button>
  </div>
);

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {cardData.map(card => (
        <Card 
          key={card.id} 
          company={card.company} 
          rating={card.rating} 
          reviews={card.reviews} 
          description={card.description} 
        />
      ))}
    </Slider>
  );
};

const categories = [
  { name: "Remote", icon: <FaHome /> },
  { name: "MNC", icon: <FaBuilding /> },
  { name: "Startup", icon: <FaRocket /> },
  { name: "Fortune 500", icon: <FaAward /> },
  { name: "Software & IT", icon: <FaCode /> },
  { name: "HR", icon: <FaUsers /> },
  { name: "Internship", icon: <FaClipboardList /> },
  { name: "Marketing", icon: <FaChartLine /> },
  { name: "Project Mgmt", icon: <FaProjectDiagram /> },
  { name: "Fresher", icon: <FaGraduationCap /> },
  { name: "Analytics", icon: <FaChartBar /> },
];

const companies = [
  { category: "MNCs", count: "1.9K+", logos: ["https://th.bing.com/th?id=OIP.r9KS_d9pWPl1GD_IdQVX_QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "https://th.bing.com/th?id=OIP.LXgWvNcN2-syxLL40dsShQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "https://th.bing.com/th?id=OIP.UBOlMs_C0za2N0eorw1BkgHaGW&w=270&h=231&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { category: "Internet", count: "198", logos: ["https://img.naukimg.com/logo_images/groups/v1/4614211.gif", "https://img.naukimg.com/logo_images/groups/v1/398058.gif", "https://img.naukimg.com/logo_images/groups/v1/1940648.gif"] },
  { category: "Manufacturing", count: "829", logos: ["https://img.naukimg.com/logo_images/groups/v1/4662953.gif", "	https://img.naukimg.com/logo_images/groups/v1/20056.gif", "	https://img.naukimg.com/logo_images/groups/v1/555292.gif"] },
  { category: "Fortune 500", count: "110", logos: ["	https://img.naukimg.com/logo_images/groups/v1/4585477.gif", "https://img.naukimg.com/logo_images/groups/v1/4238850.gif", "	https://img.naukimg.com/logo_images/groups/v1/1013592.gif"] },
  { category: "Product", count: "962", logos: ["https://img.naukimg.com/logo_images/groups/v1/1341636.gif", "	https://img.naukimg.com/logo_images/groups/v1/4642709.gif", "https://img.naukimg.com/logo_images/groups/v1/6758585.gif"] },
];

const JobPortal = () => {
  return (
    <Container>
      <NavBar>
        {categories.map((category, index) => (
          <NavButton key={index}>
            {category.icon}
            {category.name}
          </NavButton>
        ))}
      </NavBar>
      <CompaniesSection>
        <CompaniesTitle>Top companies hiring now</CompaniesTitle>
        <CompaniesGrid>
          {companies.map((company, index) => (
            <CompanyCategory key={index}>
              <CategoryTitle>
                {company.category} ({company.count} are actively hiring)
              </CategoryTitle>
              <CompanyList>
                {company.logos.map((logo, logoIndex) => (
                  <CompanyLogo key={logoIndex} src={logo} alt="Company Logo" />
                ))}
              </CompanyList>
            </CompanyCategory>
          ))}
        </CompaniesGrid>
      </CompaniesSection>
      <CardCarousel />
    </Container>
  );
};

export default JobPortal;
