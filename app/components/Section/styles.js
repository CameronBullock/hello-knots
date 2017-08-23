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
