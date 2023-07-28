import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #007FFF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Call us for Veterinary Support: +977-9861859764</Container>;
};

export default Announcement;