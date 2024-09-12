import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/home/Home";
import { Dimensions, View } from "react-native";
import { theme } from "./ui/theme/Theme";
import { grid } from "./ui/styles/gris";
import { HomeIcon } from "./ui/icons/Home";

const Stack = createStackNavigator();


export const AppStack = () => {
    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                minHeight: Dimensions.get('screen').height,
                backgroundColor: theme.colors.bg
            }}
        >
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            <View style={[{
                width: 200,
                height: 62,
                backgroundColor: theme.colors.darkBg,
                position: 'absolute',
                bottom: 72,
                right: 32,
                borderRadius: 32,
                paddingHorizontal:24,
            }, grid.row, grid.alignCenter,]}>
                <View>
                    <HomeIcon color={theme.colors.primary} size={32}/>
                </View>
            </View>
        </View>
    );
}