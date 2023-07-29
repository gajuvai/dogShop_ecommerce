import React from 'react';
import { mobile } from "../responsive";
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  // ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #007FFF;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" ? "10px" : "auto"};
  right: ${(props) => props.direction === "right" ? "10px" : "auto"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  padding-top: 30px;
  display: flex;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  width: 1520px; // Set your desired width here
  height: 500px; // Set your desired height here
`;

const Title = styled.h1`
  margin-left: 25%;
  margin-top: 3%;
  font-size: 40px;
  color: #17224D;
  display: flex;
  position: absolute;
`;

const Desc = styled.p`
  margin-top: 7%;
  margin-left: 40%;
  text-align: center;
  font-size: 26px;
  color: #231F20;
  position: absolute;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide>
          <Image src="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=1520&t=st=1690612730~exp=1690613330~hmac=bab2c3065bf54f189809169a1b1647f3048394f8b05d3d5a389cf315920e065a" />
          <Title>We provide the best care to our furry friends!</Title>
          <Desc>Top Quality of Pet Product Store.</Desc>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  );
}

export default Slider;
