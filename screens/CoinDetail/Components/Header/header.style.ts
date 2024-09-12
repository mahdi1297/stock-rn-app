import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";

export const HeaderStyles = StyleSheet.create({
    wrapper:{
        width:'100%',
        height:300
    },
    body:{
        width:'100%',
        height:'100%',
        position:'absolute',
    },
    priceText:{
        color:theme.colors.white,
        fontSize:40,
        fontFamily:"iran-yekan-extra-bold",
        marginTop:theme.distances.space.lg
    },
    priceChangeText:{
        color:theme.colors.white,
        fontSize:theme.fonstSizes.md,
        fontFamily:"iran-yekan-regular"
    },
    symbolText:{
        color: theme.colors.darkBg,
        fontSize:theme.fonstSizes.md
    }
})