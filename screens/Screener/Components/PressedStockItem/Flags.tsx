import { FC, useMemo } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { flags } from "../../../../shared/Constaints/constaints"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconClose } from "../../../../ui/icons/Close";
import { theme } from "../../../../ui/theme/Theme";

type Props = {
  applyNewFlagToList: (operation: 'add' | 'remove',stockName: string, selctedColor?: string) => void;
  initialStockName: string
}

export const Flags: FC<Props> = ({ initialStockName, applyNewFlagToList }) => {
  const stockName = useMemo(() => `stock_flag_${initialStockName}`, [initialStockName]);

  const setActiveFlagToThisStock = async (colorName: string) => {
    applyNewFlagToList('add', stockName, colorName)
  }

  const removeAcitveFlag = async () => {
    applyNewFlagToList('remove', stockName)
  }

  const flagItems = useMemo<Record<string, string>[]>(() => {
    return flags
  }, [])

  const itemIterator = (item: Record<string, string>) => {
    return <TouchableOpacity
      onPress={() => setActiveFlagToThisStock(item.colorName)}
      key={item.colorName}
      style={[styles.flagWrapper, {
        backgroundColor: item?.colorHash,
      }]}
    ></TouchableOpacity>
  }

  const renderFlatsList = flagItems
    .map(itemIterator)

  return (<View style={[grid.row, grid.alignCenter, grid.gap_md]}>
    {renderFlatsList}
    <TouchableOpacity
      onPress={removeAcitveFlag}
    >
      <IconClose
        color={theme.colors.darkText}
      />
    </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  flagWrapper: {
    width: 24, height: 24,
    borderRadius: 100
  }
})
