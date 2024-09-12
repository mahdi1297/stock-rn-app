import { FC, ReactNode } from "react"
import { FlatList } from "react-native"


type Props = {
    children: ReactNode
}

export const VirtualizedList: FC<Props> = ({ children }) => {
    return <FlatList
        data={[]}
        renderItem={null}
        ListFooterComponent={<>
            {children}
        </>}
    />
}