
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlurFade from "@/components/magicui/blur-fade";

// Mock job data
const jobCategories = [
  "Software Development",
  "Marketing",
  "Finance",
  "Education",
  "Customer Service",
  "Engineering",
  "IT Support",
  "Project Management",
  "Data Science",
  "Hospitality",
  "Retail",
  "Construction",
];

const jobs = [
  { title: "Frontend Developer", category: "Software Development" },
  { title: "Marketing Specialist", category: "Marketing" },
  { title: "Accountant", category: "Finance" },
  { title: "Teacher", category: "Education" },
  { title: "Customer Support Representative", category: "Customer Service" },
  { title: "Mechanical Engineer", category: "Engineering" },
  { title: "IT Support Specialist", category: "IT Support" },
  { title: "Project Manager", category: "Project Management" },
  { title: "Data Scientist", category: "Data Science" },
  { title: "Hotel Manager", category: "Hospitality" },
  { title: "Store Manager", category: "Retail" },
  { title: "Construction Worker", category: "Construction" },
];

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter((job) =>
          selectedCategories.includes(job.category)
        )
      );
    }
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <PageContainer>
      <section id="header">
        <BlurFade delay={0.50} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none from-stone-800">
            Unlock Your Dream Job
          </h2>
        </BlurFade>
      </section>

      <HeroSection>
        {/* <div>

      <video autoPlay muted loop>
      <source src="src/assets/videos/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
        {/* </div> */}
        <BlurFade delay={0.50} inView>
          <HeroContent>
            <HeroTitle>Find Your Dream Job</HeroTitle>
            <HeroDescription>
              Search from thousands of job listings from top companies and apply
              today.
            </HeroDescription>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Job title, keywords, or company"
              />
              <SearchButton>Search Jobs</SearchButton>
            </SearchContainer>
          </HeroContent>
        </BlurFade>
      </HeroSection>

      <Section>
        <BlurFade delay={0.50} inView>
          <SectionTitle className="from-stone-800">
            Popular Job Categories
          </SectionTitle>
          <FilterContainer>
            {jobCategories.map((category) => (
              <FilterCheckbox key={category}>
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </FilterCheckbox>
            ))}
          </FilterContainer>
          <CategoryGrid>
            {filteredJobs.map((job, index) => (
              <CategoryCard style={cardStyle} key={index}>
                <CategoryTitle>{job.title}</CategoryTitle>
                <CategoryDescription>{job.category}</CategoryDescription>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </BlurFade>
      </Section>

      <Section>
        <BlurFade delay={0.50} inView>
          <SectionTitle>Featured Jobs</SectionTitle>
          <FeaturedGrid>
            <FeaturedCard>
              <FeaturedTitle>Frontend Developer</FeaturedTitle>
              <FeaturedCompany>ABC Company - San Francisco, CA</FeaturedCompany>
              <ApplyButton>Apply Now</ApplyButton>
            </FeaturedCard>
            <FeaturedCard>
              <FeaturedTitle>Marketing Specialist</FeaturedTitle>
              <FeaturedCompany>XYZ Inc - New York, NY</FeaturedCompany>
              <ApplyButton>Apply Now</ApplyButton>
            </FeaturedCard>
            <FeaturedCard>
              <FeaturedTitle>Backend Developer</FeaturedTitle>
              <FeaturedCompany>XYZ Inc - New York, NY</FeaturedCompany>
              <ApplyButton>Apply Now</ApplyButton>
            </FeaturedCard>
            <FeaturedCard>
              <FeaturedTitle>Fullstack Developer</FeaturedTitle>
              <FeaturedCompany>XYZ Inc - New York, NY</FeaturedCompany>
              <ApplyButton>Apply Now</ApplyButton>
            </FeaturedCard>
          </FeaturedGrid>
        </BlurFade>
      </Section>
    </PageContainer>
  );
};

export default Home;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: #007bff;
  color: #fff;
  border-radius: 8px;
  margin-top: 2rem
  overflow:hidden;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('src/assets/videos/video1.mp4') no-repeat center center;
  //   background-size: cover;
  //   z-index: -1;
  // }

  // video {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   z-index: -1;
  // }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled(Input)`
  flex: 2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled(Button)`
  flex: 1;
  background: #0069d9;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterCheckbox = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 1rem;
    color: #6c757d;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const cardStyle = {
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  background: "white",
};

const CategoryCard = styled.div`
  ${cardStyle}
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), transparent);
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: black;
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeaturedCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  text-align: center;
`;

const FeaturedTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const FeaturedCompany = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

const ApplyButton = styled(Button)`
  background: #007bff;
  color: #fff;
`;

export { Home };
