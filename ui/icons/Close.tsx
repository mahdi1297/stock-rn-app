import { Feather } from "@expo/vector-icons"
import { theme } from "../theme/Theme"
import { FC } from "react"
import { IconComponentProps } from "./types"

export const IconClose: FC<IconComponentProps> = ({ size = 24, color = theme.colors.white }) => {
    return <Feather name="x" size={size} color={color} />
}