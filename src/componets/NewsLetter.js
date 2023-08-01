import React from 'react';
import styled from 'styled-components';
import { ExpandCircleDown} from '@mui/icons-material';
import banner from "../assets/banner.png";

const NewsletterContainer = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 300px;
//   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const SmallText = styled.p`
  margin-bottom: 10px;
  font-family: Inter;
  font-size: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding: 70px 0 20px 100px;
`;

const BigText = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0 0 10px 100px;
`;

const SubscribeButton = styled.button`
  background-color: #ffffff;
  color: #FF960C;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 25px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 100px;
  margin-top: 20px;
`;

const ArrowIcon = styled(ExpandCircleDown)`
  margin-left: 10px;
  size: 10px;
  transform: rotate(270deg);
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <SmallText>One More Friend Thousands More Fun!</SmallText>
      <BigText>"Find your furry soulmate at Our Pet Shop."</BigText>
      <SubscribeButton>Get Now <ArrowIcon /></SubscribeButton>
    </NewsletterContainer>
  );
};

export default Newsletter;
