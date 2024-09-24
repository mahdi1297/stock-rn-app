import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';
import {grid} from '../../../../ui/styles/gris';

export const pressedStockItemStyles = StyleSheet.create({
  wrapper: {},
  spacer: {
    borderWidth: 1,
    borderColor: '#eee',
    ...grid.mt_mid,
    ...grid.fullWidth,
  },
});
