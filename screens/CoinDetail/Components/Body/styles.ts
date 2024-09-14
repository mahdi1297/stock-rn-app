import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';
import {windowSize} from '../../../../shared/Utils/WindowSize';

const getWidth = () => {
  const {WINDOW_WIDTH} = windowSize();
  return WINDOW_WIDTH - 12;
};

export const bodyStyles = StyleSheet.create({
  wrapper: {
    width: getWidth(),
    margin: 'auto',
    overflow: 'hidden',
    minHeight: 1000,
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    paddingTop: theme.distances.space.xl,
  },
});
