import React from 'react';

import Logo from '../Logo';
import Shadow from '../Shadow';
import NavigationContainer from '../../containers/Navigation';

import {
  LogoLink,
  Header,
  Nav,
  NavLink,
  SearchJobsBtn,
} from './styles';

const testing = (e) => {
  e.preventDefault();
  console.log('Testing');
};

export default () => (
  <NavigationContainer>
    { (searchOpen, toggleSearch) => (
      <Header>
        <LogoLink>
          <Logo />
        </LogoLink>

        <Nav>
          <NavLink active>Link</NavLink>
          <NavLink href="/test" onClick={ testing }>Teams</NavLink>
          <NavLink>Link2</NavLink>
          <NavLink>Link3</NavLink>
          <NavLink>Link4</NavLink>
        </Nav>

        <Shadow />
      </Header>
    )}
  </NavigationContainer>
);
