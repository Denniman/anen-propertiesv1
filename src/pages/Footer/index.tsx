import React from 'react';

import { Container, FooterLink, TextPrimary, TextSecondary } from './styles';

const Footer = () => {
  return (
    <Container>
      <div className="footer--content">
        <TextPrimary>Anen Properties</TextPrimary>
        <div className="footer--link">
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/contact">Contact us</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '9rem',
        }}
      >
        <TextSecondary>&copy; 2021. All Rights Reserved</TextSecondary>
      </div>
    </Container>
  );
};

export default Footer;
