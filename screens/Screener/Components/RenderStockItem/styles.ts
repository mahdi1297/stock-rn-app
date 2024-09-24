import { StyleSheet } from 'react-native';
import { theme } from '../../../../ui/theme/Theme';

export const renderStockItemStyles = StyleSheet.create({
  tableRowItem: {
    width: '100%',
    height: 62,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 12,
    paddingRight: 12,
    zIndex: 1,
  },
  stockImage: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    padding: 3,
  },
  priceText: {
    color: theme.colors.grayText2,
  },
  unitText: {
    color: theme.colors.grayText1,
  },
  priceChange: {},
  flagElement: {
    right: 0,
    width: 3,
    height: 40,
    borderRadius: 3,
  }
});
