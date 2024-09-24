import { Image, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../../ui/theme/Theme";
import { grid } from "../../../../ui/styles/gris";
import { typographyStyles } from "../../../../ui/styles/typography";
import { renderStockItemStyles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FC, useEffect, useState } from "react";

type Props = {
  item: any;
  handlePresentModalPress: () => void;
  isFetching: boolean
}
export const RenderStockItem: FC<Props> = ({ item, isFetching, handlePresentModalPress }) => {
  const [color, setColor] = useState<string>(null)

  /**
   * @description This state is fill with the 
   */
  const [lastPressedItemName, setLastPressedItemName] = useState<string>(null)
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    const getItem = async () => {
      const response = await AsyncStorage.getItem(`stock_flag_${stockName}`);
      setColor(response)
    }

    /**
     * @description All items should fetch asyncStorage in initial render
     */
    if (isFirstRender) {
      getItem()
    }

    /**
     * @description If not initial render, only items will query asyncStorage
     * which are pressed 
     */
    else {
      if (!lastPressedItemName) {
        return
      }
      getItem()
    }
    setIsFirstRender(false)
  }, [isFetching])

  const isNegative = Math.sign(item?.price_change_percentage_24h) < 0 ? true : false;

  const stockName = item?.name?.toLocaleLowerCase()

  const textColor = isNegative ? theme.colors.danger : theme.colors.primary

  const saveLastPressedItem = () => setLastPressedItemName(stockName)

  return <TouchableOpacity
    onPress={() => {
      saveLastPressedItem()
      handlePresentModalPress();
    }}
    style={[grid.relative, grid.row, grid.justifyBetween, grid.alignCenter, renderStockItemStyles.tableRowItem]}>
    <Image
      source={{
        uri: item?.image
      }}
      width={28}
      height={28}
      style={[renderStockItemStyles.stockImage, {
        borderWidth: 2,
      }]}
    />
    <View style={[{ flex: 1 }, grid.row, grid.justifyBetween]}>
      <View style={[grid.alignStart]}>
        <Text
          style={[typographyStyles.regualr, typographyStyles.sizeSm, renderStockItemStyles.priceText]}>{item?.name}</Text>
        <Text
          style={[typographyStyles.regualr, typographyStyles.sizeXsm, renderStockItemStyles.unitText]}>{item?.symbol}</Text>
      </View>
      <View>
        <Text
          style={[typographyStyles.bold, typographyStyles.sizeSm, renderStockItemStyles.priceText]}>${item?.current_price}</Text>
        <Text style={[typographyStyles.bold, typographyStyles.sizeSm, renderStockItemStyles.priceChange, {
          color: textColor
        }]}>%{item?.price_change_percentage_24h?.toFixed(2)}</Text>
      </View>
    </View>
    {color ? <View
      style={[
        grid.absolute,
        renderStockItemStyles.flagElement,
        {
          backgroundColor: color,
        }]}
    ></View> : null}
  </TouchableOpacity>
} 
