import {StyleSheet} from 'react-native';
import {theme} from '../theme/Theme';

export const grid = StyleSheet.create({
  fullWidth: {
    width: '100%',
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
  mt_lg: {
    marginTop: theme.distances.space.lg,
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
  p_h_md: {
    paddingHorizontal: theme.distances.space.md,
  },
  p_h_lg: {
    paddingHorizontal: theme.distances.space.lg,
  },
  pt_lg: {
    paddingTop: theme.distances.space.lg,
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  gap_md: {
    gap: theme.distances.space.md,
  },
});
