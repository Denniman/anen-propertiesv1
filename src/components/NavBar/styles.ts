import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../Theme';

export const Container = styled.nav`
  padding: 2rem 2.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  .logo {
    flex-basis: 70%;
    display: flex;
    align-items: center;
    margin-right: 5rem;
    @media (min-width: 768px) {
      flex-basis: 25%;
    }
  }

  .logoIcon {
    width: 2rem;
    height: auto;
  }

  .link__container {
    flex-basis: 70%;
    display: none;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    align-items: center;
    @media (min-width: 768px) {
      display: flex;
    }

    &--services {
      flex-basis: 50%;
      display: flex;
      align-items: center;
      gap: 5rem;
      justify-content: space-between;
    }
    &--actions {
      /* flex-basis: 30%; */
      display: flex;
      align-items: center;
      gap: 5rem;
      justify-content: space-between;
    }
  }

  .hamburger {
    position: absolute;
    top: 2rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    @media (min-width: 768px) {
      display: none;
    }
    &__line {
      width: 2.8rem;
      height: 0.4rem;
      background-color: #000;
    }
  }
`;

export const BrandText = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${Theme.colorPallete.darkGrey};
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: ${Theme.colorPallete.darkGrey};
  font-size: 1.7rem;
  font-weight: 600;
`;
