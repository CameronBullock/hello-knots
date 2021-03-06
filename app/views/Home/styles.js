import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as t from '../../identity/type';
import * as w from '../../identity/wrappers';

export const HeroText = glamorous(t.H1Hero)({
  color: c.colors.white,
  textAlign: 'center',
  margin: '0 auto',
  fontWeight: 500,
});

export const HeroSubText = glamorous(t.H5)({
  color: c.colors.white,
  textAlign: 'center',
  fontWeight: 200,
  margin: '0 auto',
});

export const P = glamorous(t.P)(
  ({ color }) => ({
  margin: '0 auto',
  fontWeight: 100,
  letterSpacing: 1,
  color,
}),
);

export const Main = glamorous(w.Main)();
