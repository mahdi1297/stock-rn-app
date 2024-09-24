import {StyleSheet} from 'react-native';
import {theme} from '../theme/Theme';

export const typographyStyles = StyleSheet.create({
  sizeXsm: {
    fontSize: theme.fonstSizes.xsm,
  },
  sizeSm: {
    fontSize: theme.fonstSizes.sm,
  },
  sizeMd: {
    fontSize: theme.fonstSizes.md,
  },
  sizeLg: {
    fontSize: theme.fonstSizes.lg,
  },
  sizeXl: {
    fontSize: theme.fonstSizes.xl,
  },
  regualr:{
    fontFamily: theme.fontFamily.regualr,
  },
  bold:{
    fontFamily: theme.fontFamily.bold,
  },
  extraBold:{
    fontFamily: theme.fontFamily.extraBold,
  },
});
