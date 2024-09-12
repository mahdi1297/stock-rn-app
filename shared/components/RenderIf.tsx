import { FC, ReactNode } from "react"
import { ActivityIndicator, ActivityIndicatorBase, Text } from "react-native"
import { theme } from "../../ui/theme/Theme";

type Props = {
    children: ReactNode,
    condition: boolean,
    showLoading?: boolean;
    customLoader?: ReactNode;
}
export const RenderIf: FC<Props> = ({ children, condition, showLoading = false, customLoader }) => {
    if (condition === true) {
        if (showLoading) {
            return <ActivityIndicator color={theme.colors.primary} />
        }
    }
    if (!condition) {
        return children
    }

    return <></>
}