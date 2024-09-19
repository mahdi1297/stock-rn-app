import { useCallback } from "react";
import { FlatList, Image, Text, View } from "react-native"
import { theme } from "../../ui/theme/Theme"
import { screenerStyles } from "./styles"
import { grid } from "../../ui/styles/gris"
import { useGetStockListQuery } from "../Home/home.service";
import { typographyStyles } from "../../ui/styles/typography";

export default function Screener() {
    const {
        isLoading,
        isFetching,
        data,
        error
    } = useGetStockListQuery();

    return <View style={[screenerStyles.wrapper]}>
        <View style={[screenerStyles.table]}>
            <RenderTable data={data} />
        </View>
    </View>
}

const RenderTable = ({ data }: any) => {
    const renderItem = useCallback(({ item }: any) => {
        const isNegative = Math.sign(item?.price_change_percentage_24h) < 0 ? true : false;

        const textColor = isNegative ? theme.colors.danger : theme.colors.primary

        return <View style={[grid.relative, grid.row, grid.justifyBetween, grid.alignCenter, screenerStyles.tableRowItem]}>
            <Image
                source={{
                    uri: item?.image
                }}
                width={28}
                height={28}
                style={screenerStyles.stockImage}
            />
            <View style={[{ flex: 1 }, grid.row, grid.justifyBetween]}>
                <View style={[grid.alignStart]}>
                    <Text style={[typographyStyles.regualr, typographyStyles.sizeSm, screenerStyles.priceText]}>{item?.name}</Text>
                    <Text style={[typographyStyles.regualr, typographyStyles.sizeXsm, screenerStyles.unitText]}>{item?.symbol}</Text>
                </View>
                <View>
                    <Text style={[typographyStyles.bold, typographyStyles.sizeSm, screenerStyles.priceText]}>${item?.current_price}</Text>
                    <Text style={[typographyStyles.bold, typographyStyles.sizeSm, screenerStyles.priceChange, {
                        color: textColor
                    }]}>%{item?.price_change_percentage_24h?.toFixed(2)}</Text>
                </View>
            </View>
            {item?.symbol === 'xrp' ? <View style={[grid.absolute, screenerStyles.flag]}></View> : null}
        </View>
    }, [])

    return <FlatList
        renderItem={renderItem}
        data={data}
        ListFooterComponent={<View style={screenerStyles.listFooter}></View>}
        showsVerticalScrollIndicator={false}
    />
}