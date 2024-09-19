import {StyleSheet} from 'react-native';
import {theme} from '../../../../ui/theme/Theme';

export const coinInfoStyles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.distances.space.lg,
    paddingHorizontal: theme.distances.space.md,
    direction: 'rtl',
  },
  coinNameText: {
    // fontFamily: theme.fontFamily.regualr,
    // fontSize: theme.fonstSizes.lg,
    color: theme.colors.darkBg,
    textAlign: 'left',
  },
  tableWrapper: {
    maxWidth: '100%',
    marginTop: theme.distances.space.md,
    // paddingTop:theme.distances.space.md,
    gap: theme.distances.space.md,
    overflow: 'scroll',
  },
  tableRowItemWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  tableRowItem: {
    marginBottom: theme.distances.space.md,
  },
  key: {
    width: 100,
    textAlign: 'left',
  },
  value: {
    color: theme.colors.darkText,
    top: 0.5,
  },
  borderSpace: {
    marginTop: 12,
    borderTopColor: '#ebebeb',
    borderTopWidth: 4,
  },
  listContainer: {
    paddingRight: 100,
  },
});
