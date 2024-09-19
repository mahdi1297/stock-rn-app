import { Text, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { coinInfoStyles } from './styles'
import { typographyStyles } from "../../../../ui/styles/typography";

export const TableColumn = ({ data }: any) => {
    const item = data;

    return <View style={[grid.fullWidth ,coinInfoStyles.tableRowItemWrapper]}>
        <View style={[coinInfoStyles.tableRowItem, grid.row, grid.justifyBetween]} key={item.id}>
            <Text style={[typographyStyles.sizeSm, typographyStyles.regualr, coinInfoStyles.key]}>{item.key}</Text>
            <Text style={[
                grid.relative,
                typographyStyles.bold,
                typographyStyles.sizeSm,
                coinInfoStyles.value,
                {
                    color: item?.color && item?.color
                }]}>{item.value}</Text>
        </View>
    </View>
}