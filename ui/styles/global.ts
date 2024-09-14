import {StyleSheet} from 'react-native';
import {theme} from '../theme/Theme';

export const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
