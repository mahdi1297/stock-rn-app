import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';

export const exploreListStyle = StyleSheet.create({
  list: {
    marginTop: theme.distances.space.xl,
  },
  renderItemWrapper: {
    width: 170,
    height: 236,
    marginRight: theme.distances.space.sm,
    borderRadius: theme.distances.space.xl,
    paddingVertical: theme.distances.space.xl,
    paddingHorizontal: theme.distances.space.lg,
  },
  stockNameText: {
    color: theme.colors.grayText2,
    opacity: 0.7,
  },
  economicalDetailWrapper: {
    marginTop: theme.distances.space.xl,
  },
  priceText: {},
  percentageWrapper: {
    marginTop: theme.distances.space.xsm,
  },
  bottomText: {
    marginTop: theme.distances.space.lg,
    color: theme.colors.grayText2,
    opacity: 0.7,
  },
});
