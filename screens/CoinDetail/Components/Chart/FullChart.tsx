import WebView from "react-native-webview"
import { theme } from "../../../../ui/theme/Theme"
import { getTradingViewChartHtmlSetup } from "./utils"
import { FlatList } from "react-native"

export const FullChart = ({ coinId }: { coinId: string }) => {
    return <FlatList
        data={[]}
        style={{
            flex: 1,
            width: '100%',
            height: 400
        }}
        ListFooterComponentStyle={{
            width: '100%',
            height: 800
        }}
        ListFooterComponent={
            <WebView
                originWhitelist={['*']}
                source={{ html: getTradingViewChartHtmlSetup(coinId, true) }}
                style={{ flex: 1, backgroundColor: theme.colors.white }}
            />
        }
        renderItem={() => <></>}
    />
}