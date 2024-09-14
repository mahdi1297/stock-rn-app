import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';

export const HeaderStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 300,
  },
  body: {
    width: '100%',
    height: '100%',
  },
  priceText: {
    color: theme.colors.white,
    fontSize: 40,
    marginTop: theme.distances.space.lg,
  },
  priceChangeText: {
    color: theme.colors.white,
    top: -10,
  },
  symbolText: {
    color: theme.colors.darkBg,
    fontSize: theme.fonstSizes.md,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});
