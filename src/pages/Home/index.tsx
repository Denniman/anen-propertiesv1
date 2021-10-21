import React from 'react';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import {
  Main,
  Hero,
  TextPrimary,
  TextSecondary,
  Section,
  TextBold,
  TextRegular,
} from './styles';

const Home = () => {
  const cardDetails = [
    {
      id: '1',
      icon: 'Icon',
      text: 'Rent a beautiful house for your family',
      title: 'Home for Families',
    },
    {
      id: '2',
      icon: 'Icon',
      text: 'Rent a beautiful office space',
      title: 'Office Space',
    },
    {
      id: '3',
      icon: 'Icon',
      text: 'Rent a beautiful shop for your goods',
      title: 'Shops',
    },
  ];
  return (
    <>
      <NavBar />
      <Main>
        <Hero>
          <div className="hero--text">
            <TextPrimary>Modern home</TextPrimary>
            <TextPrimary>
              Your <span>best</span> home
            </TextPrimary>
            <TextSecondary>Let's find a perfect home for you</TextSecondary>
          </div>
        </Hero>

        <Section>
          <div className="services__wrapper">
            <TextBold>Our Services</TextBold>
            <TextRegular>
              When it comes to real estate and properties we're here to help you
              every step of the way
            </TextRegular>
          </div>
          <div className="services__card">
            {cardDetails.map(({ title, text, icon, id }) => (
              <Card icon={icon} text={text} title={title} key={id} />
            ))}
          </div>
        </Section>
        <Section>
          <Carousel />
        </Section>
      </Main>
    </>
  );
};

export default Home;
