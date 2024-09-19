import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Flags } from "./Flags"
import { grid } from "../../../../ui/styles/gris"
import { pressedStockItemStyles } from "./styles"
import { typographyStyles } from "../../../../ui/styles/typography"
import { theme } from "../../../../ui/theme/Theme"

type Props = {
    data: any
}
export const PressedStockItem: FC<Props> = ({ data }) => {
    return <View style={[grid.p_h_lg, grid.pt_lg, pressedStockItemStyles.wrapper]}>
        <Flags />
        <ViewExChange />
    </View>
}


const ViewExChange = () => {
    return <View style={[grid.mt_lg]}>
        <TouchableOpacity
            style={{
                width: '100%',
                height: 52,
                borderWidth: 1,
                borderColor: theme.colors.lightGray,
                borderRadius: 4
            }}
        >
            <Text style={[typographyStyles.regualr, typographyStyles.sizeMd, {
                height: 52,
                color: theme.colors.darkText,
                textAlign: 'center',
                verticalAlign: 'middle'
            }, grid.row, grid.p_h_md]}>
                مشاهده Exchange
            </Text>
        </TouchableOpacity>
    </View>
}