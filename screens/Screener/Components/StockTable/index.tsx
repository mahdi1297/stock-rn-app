import { useCallback } from "react"
import { RenderStockItem } from "../RenderStockItem"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import { stockTableStyles } from "./styles"

export const StockTable = ({ data, handlePresentModalPress, setPressedStockToSeeDetail, isFetching }: any) => {
    const renderItem = useCallback(({ item }: any) => {
        const onShortPress = () => {
            setPressedStockToSeeDetail(item)
            handlePresentModalPress()
        }
        return <RenderStockItem
            isFetching={isFetching}
            item={item}
            handlePresentModalPress={onShortPress}
        />
    }, [handlePresentModalPress, isFetching])

    return <FlatList
        renderItem={renderItem}
        data={data}
        ListFooterComponent={<View style={stockTableStyles.listFooter}></View>}
        showsVerticalScrollIndicator={false}
    />
}