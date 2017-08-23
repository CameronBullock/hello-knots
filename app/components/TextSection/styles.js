import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as s from '../../identity/spacing';
import * as t from '../../identity/type';

export const Container = glamorous.section(
  ({ bgColor }) => ({
  textAlign: 'center',
  background: bgColor,
  padding: '50px 0',
}),
);

export const H2 = glamorous(t.H2)(
  ({ color }) => ({
  color,
  margin: '0 auto',
  fontWeight: 100,
}),
);
export const P = glamorous(t.P)(
  ({ color }) => ({
  margin: '0 auto',
  fontWeight: 100,
  letterSpacing: 1,
  color,
}),
);
export const Line = glamorous.hr(
  ({ color }) => ({
  width: 80,
  border: `1px solid ${color}`,
}),
);
