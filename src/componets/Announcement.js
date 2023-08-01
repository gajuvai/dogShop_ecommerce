import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #007FFF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    height: 30px;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    height: 25px;
    font-size: 10px;
  }
`;

const Announcement = () => {
  return (
    <Container>
      Call us for Veterinary Support: +977-9861859764
    </Container>
  );
};

export default Announcement;
