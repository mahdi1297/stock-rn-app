import { useMemo } from "react"
import { View } from "react-native"
import { Header } from "./components/Header"
import { homeStyles } from "./home.styles"
import { VirtualizedList } from "../../shared/components/VirtualizedList"
import { ExploreList } from "./components/ExploreList"
import { Trends } from "./components/Trends"
import { useGetStockListQuery } from "./home.service"
import { RenderIf } from "../../shared/components/RenderIf"

export const Home = () => {
    const {
        isLoading,
        isFetching,
        data,
        error
    } = useGetStockListQuery();


    const exploreData = useMemo(() => {
        if (isLoading) {
            return [];
        }

        const rootData = data?.result || data
        return [
            rootData?.BNBUSDT || rootData?.[0],
            rootData?.BTCUSDT|| rootData?.[1],
            rootData?.ETHUSDT|| rootData?.[2],
            rootData?.DOGSUSDT|| rootData?.[3],
            rootData?.PIXELTMN|| rootData?.[4]
        ]
    }, [data?.result, isLoading])

    const trendsData = useMemo(() => {
        if(isLoading){
            return
        }
        return data?.result || data;
    }, [data?.result, isLoading])


    return <View style={homeStyles.wrapper}>
        <VirtualizedList>
            <View style={{
                width: '100%',
            }}>
                <Header />
                <View style={homeStyles.exploreWrapper}>
                    <RenderIf showLoading condition={isLoading}>
                        <ExploreList data={exploreData} />
                    </RenderIf>
                </View>
                <View>
                    <RenderIf showLoading condition={isLoading}>
                        <Trends trendsObject={trendsData} />
                    </RenderIf>
                </View>
            </View>
        </VirtualizedList>
    </View>
}