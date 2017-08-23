import React from 'react';

import { Container } from './styles';

const Section = ({ children, bgColor }) => (
    <Container bgColor={ bgColor }>
        { children }
    </Container>
);

export default Section;
