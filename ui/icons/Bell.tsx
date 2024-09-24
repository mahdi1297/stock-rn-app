import { Feather } from "@expo/vector-icons"
import { theme } from "../theme/Theme"
import { FC } from "react"
import { IconComponentProps } from "./types"

export const BellIcon: FC<IconComponentProps> = ({ size = 24, color = theme.colors.white }) => {
    return <Feather name="bell" size={size} color={color} />
}