import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

// Dummy data for the gallery images
import firstDog from "../assets/dogs/dog1.png";
import secondDog from "../assets/dogs/dog2.png";
import thirdDog from "../assets/dogs/dog3.png";
import fourthDog from "../assets/dogs/dog4.png";

const FooterContainer = styled.footer`
  background-color: #17224d;
  color: #fff;
  padding: 40px 0;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  align-items: start;
`;

const CopyrightContent = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 40px;
align-items: start;
`;

const LogoSection = styled.div``;

const Logo = styled.div`
  // width: 20px;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
`;

const AboutSection = styled.div``;

const AboutTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;

const GallerySection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const GalleryImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const ContactInfo = styled.div`
  // display: flex;
  align-items: center;
  margin-top: 25px;
  font-size: 18px;
`;

const ContactText = styled.div`
  font-size: 20px;
`;

const BottomLine = styled.hr`
  border: 1px solid #fff;
  margin: 20px 0;
  margin-left: 160px;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align the text to the left */
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align the icons to the right */
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 10px;
  border-radius: 8px
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo>YOUR LOGO HERE</Logo>
          <ContactInfo>
            Phone Number:<ContactText>+977-9861859764</ContactText>
          </ContactInfo>
          <ContactInfo>
            Location: <ContactText>Tahachal-Kathmandu</ContactText>
          </ContactInfo>
        </LogoSection>
        <AboutSection>
          <AboutTitle>About Us</AboutTitle>
          <AboutContent>
            "City Pet House & Animal Clinic: Quality and affordable animal care
            at your doorstep. Comprehensive, professional, and compassionate
            veterinary services by our dedicated and experienced team."
          </AboutContent>
        </AboutSection>
        <Section>
          <SectionTitle>Menus</SectionTitle>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Breeds</MenuItem>
            <MenuItem>Shop</MenuItem>
            <MenuItem>Gallery</MenuItem>
          </MenuList>
        </Section>
        <GallerySection>
          <GalleryImage src={firstDog} />
          <GalleryImage src={secondDog} />
          <GalleryImage src={thirdDog} />
          <GalleryImage src={fourthDog} />
        </GallerySection>
      </FooterContent>
      
      <BottomLine />
      <CopyrightContent>
        <div style={{ flex: 1 }}>
          <CopyrightText>
            Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved
          </CopyrightText>
        </div>
        <SocialMediaIcons>
          <SocialIcon href="#">
            <Facebook />
          </SocialIcon>
          <SocialIcon href="#">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="#">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="#">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon href="#">
            <YouTube />
          </SocialIcon>
        </SocialMediaIcons>
      </CopyrightContent>
    </FooterContainer>
  );
};

export default Footer;
