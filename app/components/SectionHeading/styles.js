import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as s from '../../identity/spacing';
import * as t from '../../identity/type';

export const Container = glamorous.section(
  ({ bgColor }) => ({
  textAlign: 'center',
  background: bgColor,
  paddingBottom: 20,
}),
);

export const H2 = glamorous(t.H2)(
  ({ color }) => ({
  color,
  margin: '0 auto',
  fontWeight: 100,
}),
);
export const Line = glamorous.hr(
  ({ color }) => ({
  width: 80,
  border: `1px solid ${color}`,
}),
);
