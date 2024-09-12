import { Image, Text, View } from "react-native"
import { HeaderStyles } from "./header.style"
import { grid } from "../../../../ui/styles/gris"
import { FC } from "react";


type Props = {
    image: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
}
export const Header: FC<Props> = ({ name, image, current_price, price_change_percentage_24h }) => {
    return <View style={HeaderStyles.wrapper}>
        <View style={[HeaderStyles.body, grid.alignCenter, grid.justifyCenter]}>
            <Image
                source={{
                    uri: image
                }}
                width={45}
                height={45}
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: 100
                }}
            />
            {/* <Text style={HeaderStyles.symbolText}>{name}</Text> */}
            <Text style={HeaderStyles.priceText}>${current_price}</Text>

            <Text style={HeaderStyles.priceChangeText}>
                <Text >{price_change_percentage_24h}%</Text>
                تغییرات قیمت</Text>
        </View>
    </View>
}