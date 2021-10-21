import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
import { Props } from './type';

export const Container = styled.nav<Props>`
  padding: 2rem 2.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.5rem;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  .logo {
    flex-basis: 70%;
    display: flex;
    align-items: center;
    margin-right: 5rem;
    z-index: 50;
    @media (min-width: 768px) {
      flex-basis: 25%;
    }
  }

  .logoIcon {
    width: 2rem;
    height: auto;
  }

  /* .link {
    display: none;
  }

  .link__active {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  } */

  .link__container {
    display: none;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    align-items: center;
    @media (min-width: 768px) {
      flex-basis: 70%;
      display: flex;
      flex-direction: row;
    }

    &--services {
      list-style: none;
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      justify-content: space-between;
      @media (min-width: 768px) {
        flex-direction: row;
      }

      &__item {
        padding: 3rem 0;
        @media (min-width: 768px) {
          padding: 0;
        }
      }
    }
    &--actions {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      justify-content: space-between;
      @media (min-width: 768px) {
        flex-direction: row;
      }

      &__item {
        padding: 3rem 0;

        @media (min-width: 768px) {
          padding: 0;
        }
      }
    }
  }

  .hamburger {
    position: fixed;
    top: 2rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    cursor: pointer;
    margin-right: 2rem;
    z-index: 50;

    @media (min-width: 768px) {
      display: none;
    }
    &__line {
      width: 2.8rem;
      height: 0.4rem;
      background-color: #000;
      transform-origin: 4px;
      transition: all 0.2s linear;
    }
  }

  .first {
    transform: ${(props) => (props.show ? 'rotate(45deg)' : 'rotate(0)')};
  }

  .middle {
    transform: ${(props) =>
      props.show ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${(props) => (props.show ? 0 : 1)};
  }

  .third {
    transform: ${(props) => (props.show ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  .link {
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    align-items: center;
    background: #fff;

    &__services {
      margin-top: 3rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;

      &--item {
        padding: 2rem 5rem;
        border-bottom: 2px solid ${Theme.colorPallete.lightGrey};
      }
    }
  }

  .active--link {
    display: flex;
    @media (min-width: 768px) {
      display: none;
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
