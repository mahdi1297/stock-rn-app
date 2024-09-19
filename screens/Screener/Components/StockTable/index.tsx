import { useCallback } from "react"
import { RenderStockItem } from "../RenderStockItem"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import { stockTableStyles } from "./styles"

export const StockTable = ({ data, handlePresentModalPress, setPressedStockToSeeDetail }: any) => {
    const renderItem = useCallback(({ item }: any) => {
        const onShortPress = () =>{
            setPressedStockToSeeDetail(item)
            handlePresentModalPress()
        }
        return <RenderStockItem item={item} handlePresentModalPress={onShortPress} />
    }, [handlePresentModalPress])

    return <FlatList
        renderItem={renderItem}
        data={data}
        ListFooterComponent={<View style={stockTableStyles.listFooter}></View>}
        showsVerticalScrollIndicator={false}
    />
}