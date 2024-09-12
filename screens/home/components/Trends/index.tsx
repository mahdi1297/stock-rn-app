import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { theme } from "../../../../ui/theme/Theme"
import { ChevronLeftIcon } from "../../../../ui/icons/ChevronLeft";
import { useCallback, useMemo } from "react";
import { trendsStyle } from "./trends.style";
import { ArrowDownLeftIcon } from "../../../../ui/icons/ArrowDownLeft";
import { ArrowUpLeftIcon } from "../../../../ui/icons/ArrowUpLeft";

export const Trends = ({ trendsObject = {} }: any) => {

    const renderItem = useCallback(({ item }: any) => {
        const isNegative = Math.sign(item?.stats?.['24h_ch']) < 0 ? true : false

        return <TouchableOpacity
            style={trendsStyle.renderItem}
        >
            <View>
                <View>
                    <View style={[grid.row, grid.justifyBetween, grid.alignCenter]}>
                        <Text style={trendsStyle.stockNameText}>
                            {item?.faBaseAsset}
                        </Text>
                        <Image
                            source={{
                                uri: item?.baseAsset_png_icon
                            }}
                            style={{
                                borderRadius:100
                            }}
                            width={25}
                            height={25}
                        />
                    </View>
                    <View style={[trendsStyle.economicalDetailWrapper, grid.row, grid.justifyBetween]}>
                        <Text style={[
                            trendsStyle.priceText,
                            {
                                color: isNegative ? theme.colors.danger :theme.colors.primary,
                            }]
                        }>
                            {item?.stats?.lastPrice?.toFixed(2)}
                        </Text>
                        {isNegative ?
                            <ArrowDownLeftIcon color={theme.colors.danger} size={24} />
                            : <ArrowUpLeftIcon color={theme.colors.primary} size={24} />}
                    </View>
                </View>
            </View>
            <View>
                <Text
                    style={trendsStyle.bottomText}
                >{item?.baseAsset}</Text>
            </View>

        </TouchableOpacity>
    }, [])


    const data = useMemo(() => {
        if (!Object?.keys(trendsObject)?.length) {
            return []
        }

        const objectKeys = Object.keys(trendsObject);
        const result = []

        if (!objectKeys?.length) {
            return []
        }
        for (let item of objectKeys) {
            result.push(trendsObject?.[item])
        }

        return result

        // for (let item of trendsObject) {
        //     result.push(trendsObject(item))
        // }

        // return

    }, [trendsObject])


    return <View
        style={trendsStyle.wrapper}
    >
        <View style={[grid.row, grid.justifyBetween]}>
            <Text
                style={trendsStyle.title}
            >ترند مارکت</Text>
            <TouchableOpacity>
                <ChevronLeftIcon color={theme.colors.bg} size={32} />
            </TouchableOpacity>
        </View>

        <FlatList
            style={{
                marginTop: 32
            }}
            data={data}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
        />
    </View>
}