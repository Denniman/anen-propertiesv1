import styled from 'styled-components';
import HeroImg from '../../assets/images/hero.jpg';
import Theme from '../../components/Theme';

export const Main = styled.main`
  width: 100%;
`;

export const Hero = styled.div`
  padding: 1rem 2.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40rem;
  width: 100%;

  .hero--text {
    margin-top: 5rem;
    text-align: center;
  }
`;

export const TextPrimary = styled.p`
  font-size: 5rem;
  color: ${Theme.colorPallete.white};
  font-weight: 600;
  span {
    font-weight: 700;
  }
`;

export const TextSecondary = styled.p`
  font-size: 1.8rem;
  color: ${Theme.colorPallete.white};
`;

export const Section = styled.section`
  margin: 3.5rem 2rem;

  @media (min-width: 768px) {
    margin: 3.5rem 5rem;
  }

  .services {
    &__card {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }

    &__wrapper {
      text-align: center;
    }
  }
`;

export const TextRegular = styled.p`
  font-size: 1.7rem;
`;
export const TextBold = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;
