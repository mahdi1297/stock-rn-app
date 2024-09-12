// useEffect(() => {

import { ActivityIndicator, ActivityIndicatorComponent, Text, View } from "react-native"
import { ScreenProps } from "../../shared/types/ScreenProps"
import { VirtualizedList } from "../../shared/components/VirtualizedList";
import { coinDetailStyles } from "./coinDetail.style";
import { useGetStockByIdQuery } from './coinDetail.service'
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";


export const CoinDetail = (props: ScreenProps) => {
    const { id } = props.route.params;

    // console.log(id?.toLowerCase())

    const { data, isLoading, isFetching, error } = useGetStockByIdQuery({ id: id?.toLowerCase() })


    if (isLoading) {
        return <ActivityIndicator />
    }

    // console.log(data?.tickers)

    const markets = data?.tickers

    return <View style={coinDetailStyles.wrapper}>
        <VirtualizedList>
            <View style={{
                width: '100%',
            }}>
                <Header
                    name={data?.name}
                    image={data?.image?.large}
                    current_price={data?.market_data?.current_price?.usd}
                    price_change_percentage_24h={data?.market_data?.price_change_percentage_24h}
                />
                <Body coinId={data?.symbol}/>
            </View>
        </VirtualizedList>
    </View>
}
