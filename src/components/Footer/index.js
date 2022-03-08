import React from "react";
import {
  FaInstagram,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  Logo,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";
import { animateScroll as scroll } from 'react-scroll'

export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop() ;
    }

    const img = require("../../images/tamLogo.png")
    const img1 = require("../../images/TAMv8.png")
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome} ><Logo src = {img1} /></SocialLogo>
            <SocialLogo to="/" onClick={toggleHome} ><Logo src = {img} /></SocialLogo>
            <SocialIcons>
              <SocialIconsLink href="https://www.instagram.com/smec.tam.v8/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
