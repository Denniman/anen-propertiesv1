import React, { useState } from 'react';
import Icon from '../../assets/icons/svgs/home.svg';

import { Container, BrandText, NavLinks } from './styles';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <Container show={show}>
      <div className="logo">
        <img src={Icon} alt="logo" className="logoIcon" />
        <BrandText>Anen Properties</BrandText>
      </div>

      <div className={`link__container`}>
        <ul className="link__container--services">
          <li className="link__container--services__item">
            <NavLinks to="gallery">Gallery</NavLinks>
          </li>
          <li className="link__container--services__item">
            <NavLinks to="gallery">Services</NavLinks>
          </li>
          <li className="link__container--services__item">
            <NavLinks to="gallery">About</NavLinks>
          </li>
        </ul>
        <ul className="link__container--actions">
          <li className="link__container--actions__item">
            <NavLinks to="gallery">Login</NavLinks>
          </li>
          <li className="link__container--actions__item">
            <NavLinks to="gallery">Sign Up</NavLinks>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleShow}>
        <span className="hamburger__line first"></span>
        <span className="hamburger__line middle"></span>
        <span className="hamburger__line third"></span>
      </div>

      <div className={`${show ? 'active--link' : ''} link`}>
        <ul className="link__services">
          <li className="link__services--item">
            <NavLinks to="gallery">Gallery</NavLinks>
          </li>
          <li className="link__services--item">
            <NavLinks to="gallery">Services</NavLinks>
          </li>
          <li className="link__services--item">
            <NavLinks to="gallery">About</NavLinks>
          </li>

          <li className="link__services--item">
            <NavLinks to="gallery">Login</NavLinks>
          </li>
          <li className="link__services--item">
            <NavLinks to="gallery">Sign Up</NavLinks>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default NavBar;
