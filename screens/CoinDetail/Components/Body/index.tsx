import { ReactNode } from "react"
import { View } from "react-native"
import { bodyStyles } from "./styles"

export const Body = ({ children }: { children: ReactNode }) => {
    return <View style={bodyStyles.wrapper}>
        {children}
    </View>
}