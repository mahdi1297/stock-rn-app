import './gesture-handler';

import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './ui/theme/Theme';
import { AppStack } from './Stack';
import { NavigationController } from './controllers/NavigationBarController';
import { I18nManagerManager } from './controllers/I18nManagerManager';
import { globalStyles } from './ui/styles/global';
import { useCustomFont } from './hooks/useCustomFont';
import store from './store';

function bootstrap() {
  const navigationController = new NavigationController();
  const i18nManagerManager = new I18nManagerManager();

  navigationController.setBgColor(theme.navigation.bgColor)
  i18nManagerManager.forceRtl();
}

bootstrap();

export default function App() {
  const [loaded, error] = useCustomFont();

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={globalStyles.appContainer}>
          <AppStack />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

