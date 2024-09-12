import { View } from "react-native"
import { theme } from "../../../ui/theme/Theme"
import { grid } from "../../../ui/styles/gris"
import { ChartIcon } from "../../../ui/icons/Chart"
import { HomeIcon } from "../../../ui/icons/Home"
import { bottomBarStyles } from "./bottomBar.styles"

export const BottomBar = () => {
    return <>
        <View style={[bottomBarStyles.wrapper, grid.row, grid.alignCenter,]}>
            <View
                style={[bottomBarStyles.iconButton, grid.alignCenter, grid.justifyCenter]}
            >
                <ChartIcon color={theme.colors.gray} size={24} />
            </View>
            <View
                style={[bottomBarStyles.activeIconButton, grid.alignCenter, grid.justifyCenter]}
            >
                <HomeIcon color={theme.colors.primary} size={24} />
            </View>
        </View>
    </>
}