import React from 'react';
import styled from 'styled-components';
import { ExpandCircleDown} from '@mui/icons-material';
import {dogsData} from '../data.js';

const PetCollectionsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 120px;
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

const DogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 280px;
  height: 350px;
  border: 1px slid #D4D2E3;
`;

const DogCard = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DogImage = styled.img`
  border-radius: 8px;
  margin-bottom: 10px;
  width: 264px;
  height: 264px;
`;

const DogName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DogDetails = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

const ContactButton = styled.button`
  margin-top: 430px;
  align-items: center;
  background-color: #007FFF;
  color: #ffffff;
  padding: 8px 20px;
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

const PetCollections = () => {
  return (
    <PetCollectionsContainer>
      <Title>Our Pet Collections</Title>
      <Text>"Bring joy to your home with a furry companion from our pet selection."</Text>

      <DogGrid>
        {dogsData.map((dog) => (
          <DogCard key={dog.id}>
            <DogImage src={dog.image} alt={dog.name} />
            <DogName>{dog.name}</DogName>
            <DogDetails>
              Gender: <b>{dog.gender}</b>, Age: <b>{dog.age}</b>
            </DogDetails>
          </DogCard>
        ))}
      </DogGrid>

      <ContactButton>View All<ArrowIcon /></ContactButton>
    </PetCollectionsContainer>
  );
};

export default PetCollections;
