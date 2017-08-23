import React from 'react';

import {
  Main,
  HeroText,
  HeroSubText,
} from './styles';

import Hero from '../../components/Hero';
import TextSection from '../../components/TextSection';

const Home = () => (
  <Main>
    <Hero imageUrl="/static/images/home-hero-dark.jpg">
      <HeroSubText>Hello Knots</HeroSubText>
      <HeroText measure="large">Beautiful Handmade Bows</HeroText>
    </Hero>
    <TextSection />
  </Main>
);

export default Home;
