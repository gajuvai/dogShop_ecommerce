import React from 'react';
import styled from 'styled-components';
import {servicesData} from '../data.js';


const Container =styled.div`
  //display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 300px;
  // width: 1074.229248046875px
  // height: 855.6192626953125px
  // top: 1730.21435546875px
  // left: 120px
  border: 1px solid #D4D2E3;

  // justify-content: center;
`;

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 200px;
  gap: 20px;
`;

const ServiceItem = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #D4D2E3;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  align-items: left;
  text-align: left;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ViewMoreButton = styled.button`
  background-color: #17224D;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
`;

const TextContainer = styled.div`
  padding: 10px 200px;
  text-align: center;
  margin-top: 60px;
`;

const Title = styled.h3`
  font-size: 45px;
  color: #17224D;
`;

const Text = styled.p`
  font-size: 22px;
  margin-bottom: 50px;
  justify-content: space-between;
`;

const Services = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Our Services</Title>
          <Text>
            We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care.
            We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.
          </Text>
      </TextContainer>
      <ServiceContainer>
        {servicesData.map((service) => (
          <ServiceItem key={service.id}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ViewMoreButton>View More</ViewMoreButton>
          </ServiceItem>
        ))}
      </ServiceContainer>
    </Container>
  );
};

export default Services;
