import { StyleSheet, View } from "react-native"
import { bodyStyles } from "./body.style"
import { WebView } from "react-native-webview";
import { useCallback, useMemo } from "react";
import { theme } from "../../../../ui/theme/Theme";

export const Body = ({ coinId }: { coinId: string }) => {
    const manipulateCoinName = useCallback(() => {
        return `${coinId}USD`
    }, [coinId])

    return <View style={bodyStyles.wrapper}>
        <TradingViewChart coinId={manipulateCoinName()} />
    </View>
}

const getTradingViewChartHtmlSetup = (coinId: string) => {
    const TRANDING_VIEW_BASE_URL = 'https://s3.tradingview.com/tv.js';
    const TRADING_VIEW_OBJECT = `{
                "width": "100%",
                "height": "400px",
                "symbol": "${coinId}",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "2",
                "gridColor":"${theme.colors.white}",
                "locale": "en",
                "hide_top_toolbar":true,
                "hide_volume":true,
                "hide_legend":true,
                "borderRadius":"12px",
                "backgroundColor":"${theme.colors.white}",
                "enable_publishing": false,
                "allow_symbol_change": true,
              }`

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <div id="tradingview_9e2e4"></div>
          <script type="text/javascript" src="${TRANDING_VIEW_BASE_URL}"></script>
          <script type="text/javascript">
            new TradingView.widget(
              ${TRADING_VIEW_OBJECT}
            );
          </script>
        </body>
      </html>
    `
}

const TradingViewChart = ({ coinId }: { coinId: string }) => {
    const tradingViewWidgetHtml = useMemo(() => getTradingViewChartHtmlSetup(coinId), [coinId]);

    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html: tradingViewWidgetHtml }}
                style={{ flex: 1, backgroundColor: theme.colors.white, }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 412,
    },
});
