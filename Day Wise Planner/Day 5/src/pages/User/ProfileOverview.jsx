import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ProfileForm = styled.div`
  width: 70%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Sidebar = styled.div`
  width: 25%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: calc(33% - 20px);
  padding: 10px;
  margin: 10px 10px 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 100px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
`;

const ProfileImageSrc = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SkillsBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  width: 20%;
`;

const SkillProgress = styled.input`
  width: 70%;
`;

const SkillPercentage = styled.div`
  width: 10%;
  text-align: right;
`;

const JobProfile = () => {
  return (
    <Container>
      <ProfileForm>
        <Section>
          <SectionTitle>General Information</SectionTitle>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Middle Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Re-Type Password" />
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Input type="text" placeholder="Mobile Phone" />
          <Input type="text" placeholder="Whatsapp" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Address" />
          <Input type="text" placeholder="City" defaultValue="London" />
          <Input type="text" placeholder="Country" defaultValue="England" />
        </Section>

        <Section>
          <SectionTitle>About Me</SectionTitle>
          <TextArea placeholder="Tell About You"></TextArea>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsBar>
            <SkillName>Programming</SkillName>
            <SkillProgress type="range" min="0" max="100" defaultValue="78" />
            <SkillPercentage>78%</SkillPercentage>
          </SkillsBar>
          <SkillsBar>
            <SkillName>UI Design</SkillName>
            <SkillProgress type="range" min="0" max="100" defaultValue="89" />
            <SkillPercentage>89%</SkillPercentage>
          </SkillsBar>
          {/* Add more skill bars as needed */}
        </Section>

        <SaveButton>Save Changes</SaveButton>
      </ProfileForm>

      <Sidebar>
        <ProfileImage>
          <ProfileImageContainer>
            <ProfileImageSrc src="https://via.placeholder.com/100" alt="Profile" />
          </ProfileImageContainer>
          <div>
            <h2>Oda Dink</h2>
            <p>Programmer</p>
          </div>
        </ProfileImage>
        <Section>
          <p><strong>+50 123 456 7890</strong></p>
          <p><strong>info@example.com</strong></p>
        </Section>
        <Section>
          <h4>Portfolios</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </Section>
      </Sidebar>
    </Container>
  );
};

export default JobProfile;
