import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import * as s from '../../identity/spacing';
import * as t from '../../identity/type';

export const Container = glamorous.div({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',

  [c.DESKTOP]: {
    maxWidth: '80vw',
    flexDirection: 'row',
  },
});

export const Product = glamorous.div({
  position: 'relative',
  padding: '10px 0',
  width: '100%',
  overflow: 'hidden',
  margin: '0 auto',

  [c.DESKTOP]: {
    width: '30%',

    ':hover div': {
      opacity: 1,
      bottom: 13,
    },
  },


});

export const ProductImage = glamorous.img({
  width: '100%',
});

export const Name = glamorous(t.H3)({
  color: c.colors.stoneGray,
  fontWeight: 100,
  paddingTop: 20,

  [c.DESKTOP]: {
    color: c.colors.white,
  }
});

export const ProductText = glamorous.div({

  [c.DESKTOP]: {
    position: 'absolute',
    padding: '5px 0',
    width: '100%',
    background: 'rgba(242, 123, 125, 0.81)',
    bottom: 0,
    opacity: 0,
    transition: 'all .5s ease',
  },
});

export const Price = glamorous(t.H4)({
  color: c.colors.moneyGreen,
  fontWeight: 100,
});
