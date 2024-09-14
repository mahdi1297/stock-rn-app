import { Text, TouchableOpacity, View } from "react-native"
import { searchStyles } from "./styles"
import { grid } from "../../../../ui/styles/gris"
import { BellIcon } from "../../../../ui/icons/Bell";
import { SearchIcon } from "../../../../ui/icons/Search";
import { typographyStyles } from "../../../../ui/styles/typography";

export const Search = () => {
    return <View
        style={[grid.absolute, searchStyles.wrapper, grid.row, grid.justifyBetween]}
    >
        <View>
            <Text
                style={[typographyStyles.sizeLg, typographyStyles.extraBold, searchStyles.title]}
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