import {StyleSheet} from 'react-native';
import {theme} from '../../../ui/theme/Theme';

export const bottomBarStyles = StyleSheet.create({
  wrapper: {
    height: 62,
    backgroundColor: theme.colors.darkBg,
    bottom: 72,
    right: 32,
    borderRadius: 32,
  },
  iconButton: {
    width: 80,
    height: 58,
    top: 1,
    right: 3,
    borderRadius: 32,
  },
  activeIconButton: {
    width: 80,
    height: 58,
    top: 1,
    backgroundColor: '#2d3338',
    right: 3,
    borderRadius: 32,
  },
});
