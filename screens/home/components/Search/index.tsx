import { Text,  TouchableOpacity, View } from "react-native"
import { searchStyles } from "./search.styles"
import { grid } from "../../../../ui/styles/gris"
import { BellIcon } from "../../../../ui/icons/Bell";
import { SearchIcon } from "../../../../ui/icons/Search";

export const Search = () => {
    return <View
        style={[searchStyles.wrapper, grid.row, grid.justifyBetween]}
    >
        <View>
            <Text
                style={searchStyles.title}
            >
                فارکس
            </Text>
        </View>
        <View style={[searchStyles.iconsWrapper, grid.row, grid.alignCenter]}>
            <TouchableOpacity>
                <View>
                    <SearchIcon />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <BellIcon />
                </View>
            </TouchableOpacity>
        </View>
    </View>
}