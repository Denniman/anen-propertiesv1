import styled from 'styled-components';
import Theme from '../../components/Theme';

export const Container = styled.div`
  border: 2px solid ${Theme.colorPallete.lightGrey};
  border-radius: 0.7rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${Theme.colorPallete.white};
  width: 100%;
  height: 20rem;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
`;
export const Text = styled.p`
  font-size: 1.5rem;
`;
