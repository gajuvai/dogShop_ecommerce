import React from 'react';
import styled from 'styled-components';
import { ExpandCircleDown,CheckCircleOutline} from '@mui/icons-material';
import aboutImage from "../assets/aboutUs.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: none;
  /* Add any other styles you want for the container */
`;

const Image = styled.img`
  width: 35%;
  object-fit: cover;
  justify-content: center;
  padding-left: 12%;
  /* Add any other styles you want for the image */
`;

const Content = styled.div`
  width: 35%;
  padding: 30px;
  padding-right: 12%;
  /* Add any other styles you want for the content */
`;

const Title = styled.h3`
  font-size: 45px;
  color: #17224D;
  /* Add any other styles you want for the title */
`;

const Text = styled.p`
  font-size: 22px;
  margin-bottom: 50px;
  justify-content: space-between;
  /* Add any other styles you want for the text */
`;

const ListItem = styled.li`
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListIcon = styled(CheckCircleOutline)`
  margin-right: 10px;
  color: #007FFF;
  size: 12;
`;

const ContactButton = styled.button`
  margin-top: 40px;
  display: flex;
  align-items: center;
  background-color: #007FFF;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 15px;
  cursor: pointer;
  /* Add any other styles you want for the button */
`;

const ArrowIcon = styled(ExpandCircleDown)`
  margin-left: 10px;
  transform: rotate(270deg);
`;

const About = () => {
  return (
    <Container>
      <Image src={aboutImage} alt="About" />
      <Content>
        <Title>About Us</Title>
        <Text>
          Pet House & Animal clinic was established with the motto to provide qualitative and affordable
          animal healthcare service to your doorstep.
        </Text>
        <ul>
          <ListItem><ListIcon/> Comprehensive</ListItem>
          <ListItem><ListIcon /> Professional</ListItem>
          <ListItem><ListIcon /> Compassionate veterinary service.</ListItem>
        </ul>
        <ContactButton>Contact Us<ArrowIcon /></ContactButton>
      </Content>
    </Container>
  );
};

export default About;
