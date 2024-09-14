import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const useCustomFont = () => {
    const [loaded, error] = useFonts({
        'iran-yekan-regular': require('./../assets/fonts/iran-yekan-regular.ttf'),
        'iran-yekan-bold': require('./../assets/fonts/iran-yekan-bold.ttf'),
        'iran-yekan-extra-bold': require('./../assets/fonts/iran-yekan-extra-bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    return [loaded, error]
}