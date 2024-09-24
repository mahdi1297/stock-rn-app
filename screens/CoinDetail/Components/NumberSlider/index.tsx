import { FC } from "react"
import { Text, View } from "react-native"
import { numberSliderStyles } from "./styles"
import { grid } from "../../../../ui/styles/gris"
import { theme } from "../../../../ui/theme/Theme"

type Props = {
    label: string;
    number: number;
    rank?: number;
}
export const NumberSlider: FC<Props> = ({ label, number, rank }) => {
    const isNegative = rank &&
        Math.sign(rank) < 0 ? true : false

    return <View style={[grid.fullWidth, numberSliderStyles.wrapper]}>
        <View style={[grid.row, grid.alignCenter, grid.justifyBetween]}>
            <View style={[numberSliderStyles.numbersWrapper, grid.row, grid.alignCenter, grid.justifyBetween]}>
                <Text style={numberSliderStyles.mainNumber}>${number?.toLocaleString()}</Text>
                {rank ?
                    <Text style={[numberSliderStyles.numberPercent, {
                        color: isNegative ? theme.colors.danger : theme.colors.primary
                    }]}>{rank}%</Text>
                    : null}
            </View>
            <Text style={{
                color: '#616e85'
            }}>{label}</Text>
        </View>

        <View style={[grid.row, grid.alignCenter, grid.justifyBetween]}>
            <View style={numberSliderStyles.rankNumber}>
                <Text>#{rank}</Text>
            </View>
            <View style={[numberSliderStyles.sliderBox,]}>
                <View style={numberSliderStyles.sliderRank}></View>
            </View>
        </View>
    </View>
}