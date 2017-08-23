import React from 'react';
import PropTypes from 'prop-types';

import { Container, H2, P, Line } from './styles';

import * as c from '../../identity/constants';

const TextSection = () => (
  <Container bgColor={ c.colors.lightGray }>
    <H2 color={ c.colors.darkGray }>Handmade with Love</H2>
    <Line color={ c.colors.lightPink } />
    <P color={ c.colors.stoneGray }>Affordably stylish bows that your little girl will love to wear over and over again.</P>
  </Container>
);

TextSection.defaultProps = {
  children: null,
};

TextSection.propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string.isRequired,
};

export default TextSection;
