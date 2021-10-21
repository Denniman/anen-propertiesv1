import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../../components/Theme';

export const Container = styled.footer`
  background-color: ${Theme.colorPallete.darkBlue};
  margin-top: 10rem;
  padding: 10rem 6rem 0;
  width: 100%;
  height: 40rem;

  .footer {
    &--content {
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
      }
    }

    &--link {
      display: flex;
      gap: 4rem;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
      }
    }
  }
`;

export const TextPrimary = styled.p`
  font-size: 2.5rem;
  color: ${Theme.colorPallete.white};
`;
export const TextSecondary = styled.p`
  font-size: 1.5rem;
  color: ${Theme.colorPallete.white};
`;

export const FooterLink = styled(Link)`
  font-size: 1.5rem;
  color: ${Theme.colorPallete.white};
`;
