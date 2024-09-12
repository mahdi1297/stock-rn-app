import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Home } from "./screens/home/Home";
import { StyleSheet, View } from "react-native";
import { theme } from "./ui/theme/Theme";
import { CoinDetail } from "./screens/CoinDetail";
import { COIN_DETAIL_SCREEN, HOME_SCREEN } from "./shared/Constaints/constaints";
import { BottomBar } from "./shared/components/BottomBar";
import { windowSize } from "./shared/Utils/WindowSize";

const Stack = createStackNavigator();

const STACK_NAVIGATOR_OPTIONS: StackNavigationOptions = {
    headerShown: false
}

export const AppStack = () => {
    return (
        <View
            style={styles.wrapper}
        >
            <Stack.Navigator screenOptions={STACK_NAVIGATOR_OPTIONS}>
                <Stack.Screen name={HOME_SCREEN} component={Home} />
                <Stack.Screen name={COIN_DETAIL_SCREEN} component={CoinDetail} />
            </Stack.Navigator>
            <BottomBar />
        </View>
    );
}


const { WINDOW_HEIGHT } = windowSize();
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        minHeight: WINDOW_HEIGHT,
        backgroundColor: theme.colors.bg
    }
})