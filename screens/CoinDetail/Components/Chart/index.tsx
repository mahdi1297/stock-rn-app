import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { WebView } from "react-native-webview";
import { useCallback, useContext, useMemo } from "react";
import { theme } from "../../../../ui/theme/Theme";
import { grid } from "../../../../ui/styles/gris";
import { typographyStyles } from "../../../../ui/styles/typography";
import { chartStyles } from "./styles";
import { UseBottomSheet, useOpenBottomSheet } from "../../../../shared/hooks/useBottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { coinDetailCtx } from "../../Context";
import { getTradingViewChartHtmlSetup } from "./utils";
import { ChartIcon } from "../../../../ui/icons/Chart";

export const Chart = ({ coinId }: { coinId: string }) => {

  const manipulateCoinName = useCallback(() => {
    return `${coinId}USD`
  }, [coinId])

  return <>
    <TradingViewChart coinId={manipulateCoinName()} />
  </>
}

const TradingViewChart = ({ coinId }: { coinId: string }) => {
  const tradingViewWidgetHtml = useMemo(() => getTradingViewChartHtmlSetup(coinId, false), [coinId]);
  const { openChartViewModalHandler } = useContext(coinDetailCtx);

  return (
    <>
      <View style={styles.container}>
        <View
          style={[grid.p_h_md, grid.mb_mid, chartStyles.borderSpace]}
        >
          <TouchableOpacity
            onPress={() => openChartViewModalHandler(coinId)}
            style={[grid.mt_mid,grid.row, grid.mt_lg, grid.alignCenter, grid.justifyCenter, chartStyles.button]}>
            <Text style={[chartStyles.buttonText, typographyStyles.regualr, {
              color: theme.colors.darkText
            }]}>مشاهده ی چارت کامل</Text>
            <View style={[grid.absolute, {
              left: 12
            }]}>
            <ChartIcon size={14} color={theme.colors.darkText}/>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          originWhitelist={['*']}
          source={{ html: tradingViewWidgetHtml }}
          style={{ flex: 1, backgroundColor: theme.colors.white }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 412,
  },
});
