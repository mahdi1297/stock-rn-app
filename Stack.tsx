import {
    createStackNavigator,
    StackNavigationOptions
} from "@react-navigation/stack";
import {
    StyleSheet,
    View
} from "react-native";
import { Home } from "./screens/Home/Home";
import { theme } from "./ui/theme/Theme";
import { windowSize } from "./shared/Utils/WindowSize";
import {
    COIN_DETAIL_SCREEN,
    HOME_SCREEN,
    SCREENER_SCREEN
} from "./shared/Constaints/constaints";
import { lazy, Suspense } from "react";
import { grid } from "./ui/styles/gris";

const CoinDetail = lazy(() => import('./screens/CoinDetail'))
const Screener = lazy(() => import('./screens/Screener'))
const BottomBar = lazy(() => import('./shared/components/BottomBar'))

const Stack = createStackNavigator();

const STACK_NAVIGATOR_OPTIONS: StackNavigationOptions = {
    headerShown: false,
}


export const AppStack = () => {
    return (
        <View
            style={styles.wrapper}
        >
            <Stack.Navigator
                screenOptions={STACK_NAVIGATOR_OPTIONS}>
                <Stack.Screen name={HOME_SCREEN} component={Home} />
                <Stack.Screen name={COIN_DETAIL_SCREEN} component={CoinDetail} />
                <Stack.Screen name={SCREENER_SCREEN} component={Screener} />
            </Stack.Navigator>
            <Suspense>
                <BottomBar />
            </Suspense>
        </View>
    );
}


const { WINDOW_HEIGHT } = windowSize();
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        minHeight: WINDOW_HEIGHT,
        ...grid.fullWidth,
    }
})