import React from 'react';
import Icon from '../../assets/icons/svgs/home.svg';

import { Container, BrandText, NavLinks } from './styles';

const NavBar = () => {
  return (
    <Container>
      <div className="logo">
        <img src={Icon} alt="logo" className="logoIcon" />
        <BrandText>Anen Properties</BrandText>
      </div>

      <div className="link__container">
        <div className="link__container--services">
          <NavLinks to="gallery">Gallery</NavLinks>
          <NavLinks to="gallery">Services</NavLinks>
          <NavLinks to="gallery">About</NavLinks>
        </div>
        <div className="link__container--actions">
          <NavLinks to="gallery">Login</NavLinks>
          <NavLinks to="gallery">Sign Up</NavLinks>
        </div>
      </div>

      <div className="hamburger">
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>
    </Container>
  );
};

export default NavBar;
