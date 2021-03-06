import glamorous from 'glamorous';

import * as c from '../constants';
import * as s from '../spacing';
import { headerBase } from './typeBase';
import { remCalc } from '../../lib/styleMethods';

export default glamorous.h1(
  headerBase,
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    fontSize: remCalc(c.H1_HERO_MOBILE_FONT_SIZE),
    fontWeight: c.H1_HERO_FONT_WEIGHT,

    [c.DESKTOP]: {
      fontSize: remCalc(c.H1_HERO_DESKTOP_FONT_SIZE),
    },

    [c.DESKTOP_HD]: {
      fontSize: remCalc(c.H1_HERO_DESKTOP_HD_FONT_SIZE),
    },
  },
);

