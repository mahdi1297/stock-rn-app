import { Feather } from "@expo/vector-icons"
import { theme } from "../theme/Theme"
import { FC } from "react"
import { IconComponentProps } from "./types"

export const SearchIcon: FC<IconComponentProps> = ({ size = 24, color = theme.colors.white }) => {
    return <Feather name="search" size={size} color={color} />
}