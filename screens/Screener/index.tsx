import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import {
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { StockTable } from "./Components/StockTable";
import {
    UseBottomSheet,
    useOpenBottomSheet
} from "../../shared/hooks/useBottomSheet";
import { screenerStyles } from "./styles"
import { useGetStockListQuery } from "../Home/home.service";
import { PressedStockItem } from "./Components/PressedStockItem";

export default function Screener() {
    const [pressedStockToSeeDetail, setPressedStockToSeeDetail] = useState<any>(null);


    const {
        isLoading,
        isFetching,
        data,
        error,
        refetch
    } = useGetStockListQuery();

    const BottomSheetComponentChildren = useMemo(() => {
        if (!pressedStockToSeeDetail) {
            return <></>
        }
        return <PressedStockItem data={pressedStockToSeeDetail} />
    }, [pressedStockToSeeDetail])

    const {
        bottomSheetComponent,
        handlePresentModalPress,
        handleCloseModalPress,
        bottomSheetModalRef
    }: UseBottomSheet = useOpenBottomSheet({ children: BottomSheetComponentChildren });

    const stockDataList = useMemo(() => {
        return <StockTable
            setPressedStockToSeeDetail={setPressedStockToSeeDetail}
            data={data}
            handlePresentModalPress={handlePresentModalPress}
        />
    }, [data, handlePresentModalPress, isFetching])

    return <BottomSheetModalProvider>
        <View style={[screenerStyles.wrapper]}>
            <View style={[screenerStyles.table]}>
                {bottomSheetComponent}
                {stockDataList}
            </View>
        </View>
    </BottomSheetModalProvider>
}

// https://www.binance.com/en/price/bitcoin