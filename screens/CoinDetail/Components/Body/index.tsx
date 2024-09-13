import { View } from "react-native"
import { bodyStyles } from "./body.style"
import { ReactNode } from "react"

export const Body = ({children}:{children: ReactNode}) =>{
    return <View style={bodyStyles.wrapper}>
        {children}
    </View>
}