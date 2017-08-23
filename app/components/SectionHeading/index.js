import React from 'react';
import PropTypes from 'prop-types';

import { Container, H2, Line } from './styles';

import * as c from '../../identity/constants';

const SectionHeading = ({ text, color, lineColor }) => (
  <Container>
    <H2 color={ color }>{ text }</H2>
    <Line color={ lineColor } />
  </Container>
);

SectionHeading.defaultProps = {
  children: null,
};

SectionHeading.propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string.isRequired,
};

export default SectionHeading;
