
import React from "react";
import styled from "styled-components";
import {FavoriteRounded, SearchRounded, ShoppingCartOutlined} from "@mui/icons-material";
import { Fab, TextField } from "@mui/material";
// import { Fab } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;
`;


const SearchContainer = styled.div`
  border: ${(props) => (props.noBorder ? "none" : "1px solid #007FFF")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px 13px;
  cursor: pointer;
`;

const SearchBar = styled(TextField).attrs({
  label: "Search...",
  variant: "standard",
  size: "small", // Set the TextField size to small
})`
  .MuiOutlinedInput-root {
    border-radius: 25px;
    border-width: 1px; // Set the border width here
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>YOUR LOGO HERE</Logo>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Breeds</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </Left>
        <Right>
          <SearchContainer>
            <SearchBar />
            <Fab size="small" color="primary">
              <SearchRounded style={{ fontSize: 16 }} />
            </Fab>
          </SearchContainer>
          <SearchContainer noBorder>
            <FavoriteRounded color="primary" />
          </SearchContainer>
          <SearchContainer>
            <ShoppingCartOutlined style={{ color: "#007FFF", fontSize: 16 }} />
            2 Items
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;