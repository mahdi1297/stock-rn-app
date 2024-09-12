import { useEffect, useState } from "react";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/home/Home";
import { Dimensions, View } from "react-native";
import { theme } from "./ui/theme/Theme";
import { grid } from "./ui/styles/gris";
import { HomeIcon } from "./ui/icons/Home";
import { ChartIcon } from "./ui/icons/Chart";

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
                height: 62,
                backgroundColor: theme.colors.darkBg,
                position: 'absolute',
                bottom: 72,
                right: 32,
                borderRadius: 32,
                justifyContent: 'flex-end'
            }, grid.row, grid.alignCenter,]}>
                <View
                    style={[{
                        width: 80,
                        height: 58,
                        position: 'relative',
                        top: 1,
                        right: 3,
                        borderRadius: 32
                    }, grid.alignCenter, grid.justifyCenter]}
                >
                    <ChartIcon color={theme.colors.gray} size={24} />
                </View>
                <View
                    style={[{
                        width: 80,
                        height: 58,
                        position: 'relative',
                        top: 1,
                        backgroundColor: '#2d3338',
                        right: 3,
                        borderRadius: 32
                    }, grid.alignCenter, grid.justifyCenter]}
                >
                    <HomeIcon color={theme.colors.primary} size={24} />
                </View>
            </View>
        </View>
    );
}