import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";

export const coinInfoStyles =  StyleSheet.create({
    wrapper:{
        width:'100%',
        marginBottom:theme.distances.space.lg,
        paddingLeft: theme.distances.space.md,
        direction:'rtl'
    },
    coinNameText:{
        fontFamily:"iran-yekan-regular",
        fontSize:theme.fonstSizes.lg,
        color: theme.colors.darkBg,
        textAlign:'left'
    },
    tableWrapper:{
        width:'100%',
        maxWidth:'100%',
        marginTop:theme.distances.space.md,
        gap:theme.distances.space.md,
        overflow:'scroll',
    },
    tableRowItemWrapper:{
        width:201,
    },
    tableRowItem:{
        marginBottom:theme.distances.space.md
    },
    key:{
        fontSize:theme.fonstSizes.sm,
        color: '#999',
        fontFamily:"iran-yekan-regular",
        width:100,
        textAlign:'left'
    },
    value:{
        fontSize:12,
        color: 'rgb(110, 109, 122)',
        fontFamily:"iran-yekan-bold",
        position:'relative',
        top:0.5
    }
})