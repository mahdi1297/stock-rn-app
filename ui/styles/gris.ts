import {StyleSheet} from 'react-native';
import {theme} from '../theme/Theme';

export const grid = StyleSheet.create({
  fullWidth: {
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  mt_mid: {
    marginTop: theme.distances.space.md,
  },
  mb_mid: {
    marginBottom: theme.distances.space.md,
  },
  mr_mid: {
    marginRight: theme.distances.space.md,
  },
  ml_mid: {
    marginLeft: theme.distances.space.md,
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
});
