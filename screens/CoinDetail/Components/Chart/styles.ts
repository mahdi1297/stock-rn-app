import { StyleSheet } from "react-native";
import { theme } from "../../../../ui/theme/Theme";

export const chartStyles = StyleSheet.create({
    borderSpace: {
        borderTopColor: '#ebebeb',
        borderTopWidth: 4,
    },
    buttonText: {
        width: 180,
        height: 42,
        borderRightWidth: 2,
        borderRightColor: theme.colors.primary,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingRight: 12,
    },
    button: {
        width: 180,
        height: 42,
        borderWidth: 1,
        borderColor: theme.colors.lightGray,
        borderRadius: 3,
        backgroundColor: '#eeeeeeba'
    },
})