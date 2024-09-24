import { createContext, FC, ReactNode, useCallback, useState } from "react"
import { useGetStockByIdQuery } from "./coinDetail.service"


const initialState = {
    data: [],
    isLoading: true,
    isFetching: true,
    refetch: () => { },
    
    isChartViewModalOpen: false,
    openChartViewModalHandler: (coindId: string) => { },
    closeChartViewModalHandler: () => { },
}

export const coinDetailCtx = createContext(initialState)

type Props = {
    children: ReactNode
    id: string
}
export const CoinDetailContext: FC<Props> = ({ children, id }) => {
    /**
     * @description Gets a coinId
     */
    const [isChartViewModalOpen, setIsChartViewModalOpen] = useState<string>(null);

    const {
        data,
        isLoading,
        isFetching,
        error,
        refetch
    } = useGetStockByIdQuery({ id: id?.toLowerCase() })

    const openChartViewModalHandler = useCallback((coindId: string) =>{
        setIsChartViewModalOpen(coindId)
    }, [])
    const closeChartViewModalHandler = useCallback(() =>{
        setIsChartViewModalOpen(null)
    }, [])

    const contextProviderValue: any = {
        data,
        isLoading,
        isFetching,
        refetch,
        isChartViewModalOpen,
        openChartViewModalHandler,
        closeChartViewModalHandler
    }

    return <coinDetailCtx.Provider value={contextProviderValue}>
        {children}
    </coinDetailCtx.Provider>
}