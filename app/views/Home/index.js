import React from 'react';

import { Main, HeroText } from './styles';
import Hero from '../../components/Hero';
import Input from '../../components/Input';

const Home = () => (
  <Main>
    <Hero imageUrl="/static/images/home-hero.jpg">
      <HeroText spacing={{ margin: 'bottom-lg' }} measure="large">Great Start</HeroText>
    </Hero>
  </Main>
);

export default Home;
