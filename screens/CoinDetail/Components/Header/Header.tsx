import { FC } from "react";
import { Image, Text, View } from "react-native"
import { HeaderStyles } from "./styles"
import { grid } from "../../../../ui/styles/gris"
import { typographyStyles } from "../../../../ui/styles/typography";

type Props = {
    image: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export const Header: FC<Props> = ({ name, image, current_price, price_change_percentage_24h }) => {
    return <View style={[grid.fullWidth, HeaderStyles.wrapper]}>
        <View style={[grid.fullWidth, grid.absolute, HeaderStyles.body, grid.alignCenter, grid.justifyCenter]}>
            <Image
                source={{
                    uri: image
                }}
                width={45}
                height={45}
                style={HeaderStyles.image}
            />
            <Text style={[typographyStyles.extraBold, HeaderStyles.priceText]}>${current_price}</Text>

            <Text style={[grid.relative, typographyStyles.sizeMd, typographyStyles.regualr, HeaderStyles.priceChangeText]}>
                <Text >{price_change_percentage_24h}%</Text>
                تغییرات قیمت</Text>
        </View>
    </View>
}