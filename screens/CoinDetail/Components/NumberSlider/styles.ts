import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';

export const numberSliderStyles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: theme.distances.space.md,
    width: '100%',
  },
  numbersWrapper: {
    gap: theme.distances.space.sm,
    position: 'relative',
    top: 2,
  },
  mainNumber: {
    fontSize: theme.fonstSizes.md,
    color: theme.colors.darkText,
    fontFamily: 'iran-yekan-extra-bold',
  },
  numberPercent: {
    fontSize: theme.fonstSizes.md,
    color: theme.colors.darkText,
    fontFamily: 'iran-yekan-extra-bold',
  },
  sliderBox: {
    flex: 1,
    marginTop: theme.distances.space.md,
    height: 6,
    backgroundColor: '#eff2f5',
    position: 'relative',
  },
  sliderRank: {
    width: 4,
    height: 16,
    borderRadius: 3,
    top: -5,
    backgroundColor: theme.colors.grayText1,
    position: 'absolute',
    left: 0,
  },
  rankNumber: {
    marginRight: theme.distances.space.md,
    backgroundColor: '#eff2f5',
    color: theme.colors.grayText1,
    padding: 3,
    borderRadius:3,
    position:'relative',
    top:5
  },
});
