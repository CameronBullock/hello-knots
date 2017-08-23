import React from 'react';

import {
  Main,
  HeroText,
  HeroSubText,
  P,
} from './styles';

import Hero from '../../components/Hero';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

import * as c from '../../identity/constants';

const Home = () => (
  <Main>
    <Hero imageUrl="/static/images/home-hero-dark.jpg">
      <HeroSubText>Hello Knots</HeroSubText>
      <HeroText measure="large">Beautiful Handmade Bows</HeroText>
    </Hero>

    <Section bgColor={ c.colors.lightGray } >
      <SectionHeading lineColor={ c.colors.lightPink } color={ c.colors.darkGray } text="Handmade with Love" />
      <P color={ c.colors.stoneGray }>Affordably stylish bows that your little girl will love to wear over and over again.</P>
    </Section>

    <Section>
      <SectionHeading lineColor={ c.colors.lightPink } text="Featured Products" color={ c.colors.darkGray }/>
      <Products />
    </Section>
    <Footer />
  </Main>
);

export default Home;
