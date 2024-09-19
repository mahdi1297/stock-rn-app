import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';
import {windowSize} from './../../../../utils/WindowSize';

const {WINDOW_WIDTH} = windowSize();

export const trendsStyle = StyleSheet.create({
  wrapper: {
    margin: 'auto',
    marginTop: theme.distances.space.xl,
    width: WINDOW_WIDTH - theme.distances.space.md,
    borderRadius: theme.distances.space.xl,
    backgroundColor: theme.colors.white,
    paddingTop: theme.distances.space.xl,
    paddingHorizontal: theme.distances.space.lg,
    paddingBottom: 100,
  },
  title: {
    height: 45,
    color: theme.colors.primary,
  },
  renderItem: {
    marginBottom: theme.distances.space.xmd,
    width: WINDOW_WIDTH / 2 - 40,
    borderWidth: 1,
    height: 130,
    borderColor: theme.colors.lightGray,
    borderRadius: theme.distances.space.lg,
    padding: theme.distances.space.md,
  },
  stockNameText: {
    color: theme.colors.grayText2,
    opacity: 0.7,
  },
  economicalDetailWrapper: {
    marginTop: theme.distances.space.xmd,
  },
  priceText: {
    fontWeight: 500,
  },
  percentageWrapper: {
    marginTop: theme.distances.space.xsm,
  },
  bottomText: {
    marginTop: theme.distances.space.xsm,
    color: theme.colors.grayText2,
    opacity: 0.7,
    textAlign: 'left',
  },
});
