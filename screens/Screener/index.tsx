import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import { BottomSheetModalProvider, } from '@gorhom/bottom-sheet';
import { StockTable } from "./Components/StockTable";
import { UseBottomSheet, useOpenBottomSheet } from "../../shared/hooks/useBottomSheet";
import { screenerStyles } from "./styles"
import { useGetStockListQuery } from "../Home/home.service";
import { PressedStockItem } from "./Components/PressedStockItem";
import { flagManagerClient, FlagOrder } from "./Components/controller";

// https://medium.com/@hooman.the1/composite-design-pattern-in-typescript-part-1-motivation-applicability-structure-0e6b132d7e93

export default function Screener() {
    const [pressedStockToSeeDetail, setPressedStockToSeeDetail] = useState<any>(null);

    const {
        isLoading, isFetching, data, error, refetch
    } = useGetStockListQuery();


    const applyNewFlagToList = useCallback(async (order: FlagOrder, symbolName: string, color: string) => {
        flagManagerClient({ order })
            .operate(symbolName, color);

        refetch();
    }, [])

    const BottomSheetComponentChildren = useMemo(() => {
        if (!pressedStockToSeeDetail) {
            return <></>
        }

        return <PressedStockItem
            applyNewFlagToList={applyNewFlagToList}
            data={pressedStockToSeeDetail} />
    }, [pressedStockToSeeDetail, applyNewFlagToList])


    const {
        bottomSheetComponent,
        handlePresentModalPress,
        handleCloseModalPress,
        bottomSheetModalRef
    }: UseBottomSheet = useOpenBottomSheet({ children: BottomSheetComponentChildren });

    const stockDataList = useMemo(() => {
        return <StockTable
            isFetching={isFetching}
            setPressedStockToSeeDetail={setPressedStockToSeeDetail}
            data={data}
            handlePresentModalPress={handlePresentModalPress}
        />
    }, [data, handlePresentModalPress, isFetching, isLoading])

    return <BottomSheetModalProvider
    >
        <View style={[screenerStyles.wrapper]}>
            <View style={[screenerStyles.table]}>
                {bottomSheetComponent}
                {stockDataList}
            </View>
        </View>
    </BottomSheetModalProvider>
}
