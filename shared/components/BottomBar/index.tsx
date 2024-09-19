import { useMemo, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { theme } from "../../../ui/theme/Theme"
import { grid } from "../../../ui/styles/gris"
import { ChartIcon } from "../../../ui/icons/Chart"
import { HomeIcon } from "../../../ui/icons/Home"
import { bottomBarStyles } from "./styles"
import { useNavigation } from '@react-navigation/native';
import { HOME_SCREEN, SCREENER_SCREEN } from "../../Constaints/constaints"

export default function BottomBar () {
    const [activePage, setActivePage] = useState(1);

    const buttons = useMemo(() => {
        return [
            {
                id: 2,
                navigatePath: SCREENER_SCREEN,
                iconComponent: ChartIcon,
                accessibilityLabel: 'Screener bottom tab button'
            },
            {
                id: 1,
                navigatePath: HOME_SCREEN,
                iconComponent: HomeIcon,
                accessibilityLabel: 'Home bottom tab button'
            },
        ]
    }, [])

    const navigation: any = useNavigation();

    return <>
        <View style={[grid.absolute, bottomBarStyles.wrapper, grid.row, grid.alignCenter, grid.justifyEnd]}>
            {buttons.map((item) => {
                const isActive = activePage === item.id
                return <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                        setActivePage(item.id)
                        navigation.navigate(item.navigatePath)
                    }}
                    style={[grid.relative, isActive ? bottomBarStyles.activeIconButton : bottomBarStyles.iconButton, grid.alignCenter, grid.justifyCenter]}
                >
                    <item.iconComponent color={isActive ? theme.colors.primary : theme.colors.gray} size={24} />
                </TouchableOpacity>
            })}
        </View>
    </>
}