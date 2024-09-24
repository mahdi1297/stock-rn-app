import React, { useContext, useMemo } from 'react'
import { CoinDetailContext, coinDetailCtx } from './Context'
import CoinDetailComponent from './Component'
import { ScreenProps } from '../../shared/types/ScreenProps'

const CoinDetail = (props: ScreenProps) => {
    const { id } = props.route.params;

    const renderView = useMemo(() => {
        return <CoinDetailComponent />
    }, [id])

    return (
        <CoinDetailContext id={id}>
            {renderView}
        </CoinDetailContext>
    )
}

export default CoinDetail