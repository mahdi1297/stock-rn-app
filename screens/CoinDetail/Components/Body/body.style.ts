import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { windowSize } from "../../../../shared/Utils/WindowSize";

const {WINDOW_WIDTH} = windowSize();

export const bodyStyles = StyleSheet.create({
    wrapper:{
        width:WINDOW_WIDTH  - 12,
        margin:'auto',
        overflow:'hidden',
        minHeight:1000,
        backgroundColor:theme.colors.white,
        borderTopRightRadius:22,
        borderTopLeftRadius:22,
        paddingTop:theme.distances.space.xl
    }
})