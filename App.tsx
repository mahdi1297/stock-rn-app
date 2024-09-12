import './gesture-handler';
import {
  I18nManager,
  StyleSheet,
  View
} from 'react-native';
import { theme } from './ui/theme/Theme';
import { AppStack } from './Stack';
import { NavigationContainer } from '@react-navigation/native';
import { useCustomFont } from './hooks/useCustomFont';
import * as NavigationBar from "expo-navigation-bar";
import { Provider } from 'react-redux';
import store from './Store';

NavigationBar.setPositionAsync("absolute");
NavigationBar.setBackgroundColorAsync("#41414166");

I18nManager.forceRTL(true);

export default function App() {
  const [loaded, error] = useCustomFont();

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <AppStack />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
});
