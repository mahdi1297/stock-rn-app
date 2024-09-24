import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { theme } from "../../../../ui/theme/Theme"
import { ChevronLeftIcon } from "../../../../ui/icons/ChevronLeft";
import { useCallback, useMemo } from "react";
import { trendsStyle } from "./styles";
import { ArrowDownLeftIcon } from "../../../../ui/icons/ArrowDownLeft";
import { ArrowUpLeftIcon } from "../../../../ui/icons/ArrowUpLeft";
import { useNavigation } from '@react-navigation/native';
import { COIN_DETAIL_SCREEN } from "../../../../shared/Constaints/constaints";
import { typographyStyles } from "../../../../ui/styles/typography";

export const Trends = ({ trendsObject = {} }: any) => {
    const navigation: any = useNavigation();

    const navigateToDetailPage = useCallback((coinId: string) => {
        navigation.navigate(COIN_DETAIL_SCREEN, {
            id: coinId,
        });

    }, [navigation])

    const renderItem = useCallback(({ item }: any) => {
        const isNegative = item?.state?.['24_ch'] ?
            Math.sign(item?.stats?.['24h_ch']) < 0 ? true : false :
            Math.sign(item?.price_change_percentage_24h) < 0 ? true : false


        const assetId = item?.enBaseAsset || item?.id

        return <TouchableOpacity
            onPress={() => navigateToDetailPage(assetId)}
            style={trendsStyle.renderItem}
        >
            <View>
                <View>
                    <View style={[grid.row, grid.justifyBetween, grid.alignCenter]}>
                        <Text style={[typographyStyles.sizeMd, typographyStyles.bold, trendsStyle.stockNameText]}>
                            {item?.faBaseAsset || item?.name}
                        </Text>
                        <Image
                            source={{
                                uri: item?.baseAsset_png_icon || item?.image
                            }}
                            style={{
                                borderRadius: 100
                            }}
                            width={25}
                            height={25}
                        />
                    </View>
                    <View style={[grid.fullWidth, trendsStyle.economicalDetailWrapper, grid.row, grid.justifyBetween]}>
                        <Text style={[
                            typographyStyles.sizeMd, typographyStyles.extraBold,
                            trendsStyle.priceText,
                            {
                                color: isNegative ? theme.colors.danger : theme.colors.primary,
                            }]
                        }>
                            {item?.stats?.lastPrice?.toFixed(2) || item?.current_price?.toFixed(1)}
                        </Text>
                        {isNegative ?
                            <ArrowDownLeftIcon color={theme.colors.danger} size={24} />
                            : <ArrowUpLeftIcon color={theme.colors.primary} size={24} />}
                    </View>
                </View>
            </View>
            <View>
                <Text
                    style={[grid.fullWidth, typographyStyles.regualr, typographyStyles.sizeSm, trendsStyle.bottomText]}
                >{item?.baseAsset || item?.symbol}</Text>
            </View>

        </TouchableOpacity>
    }, [navigateToDetailPage])


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
                style={[typographyStyles.extraBold, typographyStyles.sizeLg, trendsStyle.title]}
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