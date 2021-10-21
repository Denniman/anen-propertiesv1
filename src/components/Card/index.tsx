import React from 'react';

import { Container, Title, Text } from './styles';

type ICard = {
  icon: any;
  title: string;
  text: string;
};

const Card: React.FC<ICard> = ({ icon, title, text }) => {
  return (
    <Container>
      <div>{icon}</div>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;
