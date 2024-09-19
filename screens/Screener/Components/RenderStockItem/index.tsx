import { Image, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { grid } from "../../../../ui/styles/gris";
import { typographyStyles } from "../../../../ui/styles/typography";
import { renderStockItemStyles } from "./styles";

export const RenderStockItem = ({ item, handlePresentModalPress }: any) => {
    const isNegative = Math.sign(item?.price_change_percentage_24h) < 0 ? true : false;

    const textColor = isNegative ? theme.colors.danger : theme.colors.primary

    return <TouchableOpacity
        onPress={handlePresentModalPress}
        style={[grid.relative, grid.row, grid.justifyBetween, grid.alignCenter, renderStockItemStyles.tableRowItem]}>
        <Image
            source={{
                uri: item?.image
            }}
            width={28}
            height={28}
            style={renderStockItemStyles.stockImage}
        />
        <View style={[{ flex: 1 }, grid.row, grid.justifyBetween]}>
            <View style={[grid.alignStart]}>
                <Text style={[typographyStyles.regualr, typographyStyles.sizeSm, renderStockItemStyles.priceText]}>{item?.name}</Text>
                <Text style={[typographyStyles.regualr, typographyStyles.sizeXsm, renderStockItemStyles.unitText]}>{item?.symbol}</Text>
            </View>
            <View>
                <Text style={[typographyStyles.bold, typographyStyles.sizeSm, renderStockItemStyles.priceText]}>${item?.current_price}</Text>
                <Text style={[typographyStyles.bold, typographyStyles.sizeSm, renderStockItemStyles.priceChange, {
                    color: textColor
                }]}>%{item?.price_change_percentage_24h?.toFixed(2)}</Text>
            </View>
        </View>
    </TouchableOpacity>
} 