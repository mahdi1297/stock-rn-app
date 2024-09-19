import {StyleSheet} from 'react-native';
import {theme} from '../../ui/theme/Theme';
import { getWidth } from '../../helpers/GetWidth';

export const screenerStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  table: {
    paddingTop: 32,
    paddingLeft: 24,
    width: getWidth(theme.distances.space.md),
    margin: 'auto',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 42,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
 
  flag: {
    width: 100,
    height: 200,
    backgroundColor: theme.colors.danger,
    right: 0,
    top: 0,
    zIndex: 15,
    // elevation: Platform.OS === 'android' ? 100 : 0,
    borderRadius: 2,
  },

});
