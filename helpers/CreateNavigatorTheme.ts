import {DefaultTheme} from '@react-navigation/native';
import {theme} from '../ui/theme/Theme';

export function createNavigatorTheme() {
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.bg,
    },
  };
}
