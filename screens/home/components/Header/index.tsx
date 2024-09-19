import { Dimensions, Text, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { Search } from "../Search"

export const Header = () => {
    return <View
        style={[
            grid.fullWidth,
            { height: 400 },
            grid.alignCenter, grid.justifyCenter]}
    >
        <Text
            style={{
                fontSize: 110,
                fontWeight: 900,
                color: '#83898a',
                // opacity: 0.2,
                width: Dimensions.get('screen').width + 100,
                position: 'relative',
            }}
        >
            MyStock
        </Text>
        <Search />
    </View>
}