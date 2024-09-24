import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Flags } from "./Flags"
import { grid } from "../../../../ui/styles/gris"
import { pressedStockItemStyles } from "./styles"
import { typographyStyles } from "../../../../ui/styles/typography"
import { theme } from "../../../../ui/theme/Theme"
import { WebBrowser } from "../../../../controllers/WebBrowser";
import { env } from "../../../../env";

type Props = {
  data: any;
  applyNewFlagToList: (operation: 'add' | 'remove', stockName: string, selctedColor?: string) => void
}

export const PressedStockItem: FC<Props> = ({ data, applyNewFlagToList }) => {
  const stockName = data?.name?.toLowerCase();

  return <View style={[grid.p_h_lg, grid.pt_lg, pressedStockItemStyles.wrapper]}>
    <Flags
      applyNewFlagToList={applyNewFlagToList}
      initialStockName={stockName} />
    <ViewExChange stockName={stockName} />
  </View>
}

const ViewExChange = ({ stockName }: { stockName: string }) => {
  const openExchangeUrl = async () => {
    const webBrowser = new WebBrowser();
    const EXCHANGE_URL = `${env.BINANCE_BASE_URL}${stockName}`

    await webBrowser.openUrl(EXCHANGE_URL);
  };

  return <View style={[grid.mt_lg]}>
    <TouchableOpacity
      style={{
        width: '100%', height: 52, borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 4
      }}
      onPress={openExchangeUrl}
    >
      <Text style={[typographyStyles.regualr, typographyStyles.sizeMd, {
        height: 52, color: theme.colors.darkText, textAlign: 'center', verticalAlign: 'middle'
      }, grid.row, grid.p_h_md]}>
        مشاهده Exchange
      </Text>
    </TouchableOpacity>
  </View>
}
