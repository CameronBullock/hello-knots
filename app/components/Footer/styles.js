import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as s from '../../identity/spacing';
import * as t from '../../identity/type';

export const Container = glamorous.div({
  background: c.colors.black,
  textAlign: 'center',
  padding: '10px 0',
});
export const Copyright = glamorous(t.Small)({
  color: c.colors.white,
  fontWeight: 100,
});
