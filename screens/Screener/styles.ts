import {StyleSheet} from 'react-native';
import {theme} from '../../ui/theme/Theme';
import {windowSize} from '../../shared/Utils/WindowSize';

const getWidth = () => {
  const {WINDOW_WIDTH} = windowSize();

  return WINDOW_WIDTH - theme.distances.space.md;
};

export const screenerStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  table: {
    paddingTop: 32,
    paddingLeft: 24,
    width: getWidth(),
    margin: 'auto',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 42,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
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
  listFooter: {
    height: 150,
  },
});
