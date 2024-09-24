// useEffect(() => {

import { ActivityIndicator, View } from "react-native"
import { ScreenProps } from "../../shared/types/ScreenProps"
import { VirtualizedList } from "../../shared/components/VirtualizedList";
import { coinDetailStyles } from "./styles";
import { useGetStockByIdQuery } from './coinDetail.service'
import { Header } from "./Components/Header/Header";
import { Chart } from "./Components/Chart";
import { Body } from "./Components/Body";
import { CoinInfo } from "./Components/CoinInfo";
import { grid } from "../../ui/styles/gris";


export default function CoinDetail(props: ScreenProps) {
    const { id } = props.route.params;

    const {
        data,
        isLoading,
        isFetching,
        error
    } = useGetStockByIdQuery({ id: id?.toLowerCase() })



    // useEffect(() => {
    //     axios.get('https://pro-api.coinmarketcap.com/v1/content/latest', {
    //         headers: {
    //             'X-CMC_PRO_API_KEY': 'f4d3ac72-583c-4ed1-94ed-b7c85f0183c8',
    //         },
    //     }).then((response) => {
    //         console.log(response?.data?.data)
    //     }).catch((error) => {
    //         console.log(error?.response.datar)
    //     })
    // }, [])

    if (isLoading) {
        return <View>
            <ActivityIndicator />
        </View>
    }

    const market_cap = data?.market_data?.market_cap?.usd;
    const market_cap_rank = data?.market_data?.market_cap_rank

    // coin total trading volume in currency
    const total_volume = data?.market_data?.total_volume?.usd

    // قیمت سکه 24 ساعته با ارز بالا
    const high_24h = data?.market_data?.high_24h?.usd
    const low_24h = data?.market_data?.low_24h?.usd

    const price_change_24h = data?.market_data?.price_change_24h
    const price_change_percentage_24h = data?.market_data?.price_change_percentage_24h
    // const market_cap_change_24h = data?.market_data?.market_cap_change_24h
    // const market_cap_change_percentage_24h
    //     = data?.market_data?.market_cap_change_percentage_24h

    // گردش تامین
    // const circulating_supply = data?.market_data?.circulating_supply
    const total_supply = data?.market_data?.total_supply
    // const last_updated = data?.market_data?.last_updated

    // const markets = data?.tickers



    return <View style={coinDetailStyles.wrapper}>
        <VirtualizedList>
            <View style={[grid.fullWidth]}>
                <Header
                    name={data?.name}
                    image={data?.image?.large}
                    current_price={data?.market_data?.current_price?.usd}
                    price_change_percentage_24h={data?.market_data?.price_change_percentage_24h}
                />
                <Body>
                    <CoinInfo
                        name={data?.name}
                        market_cap={market_cap}
                        market_cap_rank={market_cap_rank}
                        price_change_24h={price_change_24h}
                        price_change_percentage_24h={price_change_percentage_24h}
                        total_volume={total_volume}
                        total_supply={total_supply}
                        high_24h={high_24h}
                        low_24h={low_24h}
                    />
                    <Chart coinId={data?.symbol}></Chart>
                </Body>
            </View>
        </VirtualizedList>
    </View>
}
