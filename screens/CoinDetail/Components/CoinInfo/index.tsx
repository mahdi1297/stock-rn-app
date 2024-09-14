import { FC, useCallback } from "react"
import { FlatList, Text, View } from "react-native"
import { coinInfoStyles } from "./styles"
import { theme } from "../../../../ui/theme/Theme"
import { NumberSlider } from "../NumberSlider"
import { TableColumn } from "./TableColumn"
import { MidSpaceTop } from "../../../../shared/components/SpaceTop"
import { typographyStyles } from "../../../../ui/styles/typography"

type Props = {
    market_cap_rank: number;
    market_cap: number;
    price_change_24h: number
    price_change_percentage_24h: number
    total_volume: number
    total_supply: number
    high_24h: number
    low_24h: number
    name: string;
}
export const CoinInfo: FC<Props> = ({
    market_cap,
    market_cap_rank,
    name,
    price_change_24h,
    price_change_percentage_24h,
    total_supply,
    high_24h,
    low_24h,
    total_volume }) => {

    const isNegative =
        Math.sign(price_change_percentage_24h) < 0 ? true : false


    const tableData: { id: number, key: string, value: string, color?: string }[] = [
        {
            id: 1,
            key: 'تغییرات قیمت 24',
            color: theme.colors.primary,
            value: price_change_24h?.toFixed(2)
        },
        {
            id: 2,
            key: 'درصد تغییرات 24',
            color: isNegative ? theme.colors.danger : theme.colors.primary,
            value: `${price_change_percentage_24h?.toFixed(2)}%`
        },
        {
            id: 3,
            key: 'حجم بازار',
            value: total_volume?.toExponential(4)
        },
        {
            id: 4,
            key: 'سرمایه در گردش',
            value: total_supply?.toExponential(4)
        },
        {
            id: 2,
            key: 'رنک مارکت کپ',
            value: market_cap_rank?.toString()
        },
        {
            id: 3,
            key: 'بالاترین در 24',
            value: high_24h?.toLocaleString()
        },
        {
            id: 4,
            key: 'پایین ترین در 24',
            value: low_24h?.toLocaleString()
        },
    ]

    const renderItem = useCallback(({ item }: { item: { id: number, key: string, value: string, color?: string } }) => {
        return <TableColumn data={item} />
    }, [])

    return <>
        <View style={coinInfoStyles.wrapper}>
            <Text style={[typographyStyles.regualr, typographyStyles.sizeLg, coinInfoStyles.coinNameText]}>
                {name}
            </Text>
        </View>
        <NumberSlider
            label="Market Cap"
            number={market_cap}
            rank={market_cap_rank}
        />
        <MidSpaceTop />
        <NumberSlider
            label="Circulating supply"
            number={total_supply}
        />
        <MidSpaceTop />
        <View
            style={coinInfoStyles.borderSpace}
        ></View>
        <View style={coinInfoStyles.wrapper}>
            <FlatList
                style={coinInfoStyles.tableWrapper}
                data={tableData}
                contentContainerStyle={coinInfoStyles.listContainer}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    </>
}

