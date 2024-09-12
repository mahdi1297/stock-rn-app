import { Text, View } from "react-native"
import { Header } from "./components/Header"
import { homeStyles } from "./home.styles"
import { VirtualizedList } from "../../shared/components/VirtualizedList"
import { ExploreList } from "./components/ExploreList"
import { Trends } from "./components/Trends"
import { useEffect, useState } from "react"
import axios from "axios"

export const Home = () => {
    // const [data, setData] = useState([]);
    // const [trendsObject, setTrendsObject] = useState({})
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     const get = async () => {
    //         axios.get('https://api.wallex.ir/v1/otc/markets').then((response) => {
    //             const rootData = response?.data?.result;

    //             const dt: any = [
    //                 rootData?.BNBUSDT,
    //                 rootData?.BTCUSDT,
    //                 rootData?.ETHUSDT,
    //                 rootData?.DOGSUSDT,
    //                 rootData?.PIXELTMN
    //             ]

    //             setData(dt);
    //             setTrendsObject(rootData)
    //         }).finally(() => {
    //             setIsLoading(false)
    //         })
    //     }

    //     get();
    // }, [])

    return <View style={homeStyles.wrapper}>
        <VirtualizedList>
            <View style={{
                width: '100%',
            }}>
                <Header />
                <View style={{
                    height: 268
                }}>
                    {/* {isLoading ? <Text>Loading...</Text> :
                        <ExploreList data={data} />
                    } */}
                </View>
                <View>
                    {/* {isLoading ? <Text>Loading...</Text> :
                        <Trends trendsObject={trendsObject} />
                    } */}
                </View>
            </View>
        </VirtualizedList>
    </View>
}