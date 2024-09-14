import { View } from "react-native"
import { theme } from "../../../ui/theme/Theme"
import { grid } from "../../../ui/styles/gris"
import { ChartIcon } from "../../../ui/icons/Chart"
import { HomeIcon } from "../../../ui/icons/Home"
import { bottomBarStyles } from "./styles"

export const BottomBar = () => {
    return <>
        <View style={[grid.absolute, bottomBarStyles.wrapper, grid.row, grid.alignCenter, grid.justifyEnd]}>
            <View
                style={[grid.relative, bottomBarStyles.iconButton, grid.alignCenter, grid.justifyCenter]}
            >
                <ChartIcon color={theme.colors.gray} size={24} />
            </View>
            <View
                style={[grid.relative, bottomBarStyles.activeIconButton, grid.alignCenter, grid.justifyCenter]}
            >
                <HomeIcon color={theme.colors.primary} size={24} />
            </View>
        </View>
    </>
}