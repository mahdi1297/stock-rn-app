import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useMemo } from "react"
import { theme } from "../../../../ui/theme/Theme"
import { exploreListStyle } from "./styles"
import { grid } from "../../../../ui/styles/gris"
import { ArrowDownLeftIcon } from "../../../../ui/icons/ArrowDownLeft"
import { ArrowUpLeftIcon } from "../../../../ui/icons/ArrowUpLeft"
import { useNavigation } from '@react-navigation/native';
import { COIN_DETAIL_SCREEN } from "../../../../shared/Constaints/constaints"
import { typographyStyles } from "../../../../ui/styles/typography"

export const ExploreList = ({ data }: { data: any }) => {
    const FIRST_RENDER_ITEM_MARGIN_LEFT = useMemo(() => theme.distances.space.xmd, []);
    const OTHER_RENDER_ITEM_MARGIN_LEFT = useMemo(() => theme.distances.space.xsm, []);

    const navigation: any = useNavigation();

    const navigateToDetailPage = useCallback((coinId: string) => {
        navigation.navigate(COIN_DETAIL_SCREEN, {
            id: coinId,
        });

    }, [navigation])

    const renderItem = useCallback(({ index, item }: any) => {
        const isFirst = index === 0;

        const isNegative = item?.state?.['24_ch'] ?
            Math.sign(item?.stats?.['24h_ch']) < 0 ? true : false :
            Math.sign(item?.price_change_percentage_24h) < 0 ? true : false

        const marginLeft = isFirst ?
            FIRST_RENDER_ITEM_MARGIN_LEFT
            : OTHER_RENDER_ITEM_MARGIN_LEFT;

        const backgroundColor = isFirst ? theme.colors.white : 'transparent'
        const assetId = item?.enBaseAsset || item?.id

        return <TouchableOpacity
            onPress={() => navigateToDetailPage(assetId)}
            style={[
                exploreListStyle.renderItemWrapper,
                {
                    backgroundColor,
                    marginLeft,
                }
                , grid.justifyStart, grid.alignStart]}
        >
            <View>
                <View>
                    <Text style={[typographyStyles.sizeMd, typographyStyles.regualr, exploreListStyle.stockNameText]}>
                        {item?.faBaseAsset || item?.name}
                    </Text>
                </View>
                <View style={[exploreListStyle.economicalDetailWrapper, grid.row, grid.justifyBetween]}>
                    <Text style={[
                        typographyStyles.sizeLg,
                        typographyStyles.extraBold,
                        exploreListStyle.priceText,
                        {
                            color: !isFirst ? theme.colors.white : (
                                isNegative ? theme.colors.danger :
                                    theme.colors.primary),
                        }]
                    }>
                        {item?.stats?.lastPrice?.toFixed(2) || item?.current_price?.toFixed(1)}
                    </Text>
                    {isNegative ?
                        <ArrowDownLeftIcon color={theme.colors.danger} size={32} />
                        : <ArrowUpLeftIcon color={theme.colors.primary} size={32} />}
                </View>
            </View>
            <View
                style={exploreListStyle.percentageWrapper}
            >
                <Text style={[
                    exploreListStyle.priceText,
                    {
                        color: !isFirst ? theme.colors.white : (
                            isNegative ? theme.colors.danger :
                                theme.colors.primary),
                    }]}>
                    ({item?.stats?.['24h_ch'] || item?.price_change_percentage_24h?.toFixed(2)})
                </Text>
            </View>
            <View>
                <Text
                    style={[typographyStyles.sizeSm, typographyStyles.regualr, exploreListStyle.bottomText]}
                >{item?.baseAsset || item?.symbol}</Text>
            </View>
        </TouchableOpacity>
    }, [navigateToDetailPage])

    return <FlatList
        style={exploreListStyle.list}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
    />
}