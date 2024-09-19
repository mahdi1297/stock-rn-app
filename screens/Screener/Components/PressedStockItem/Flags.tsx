import { useMemo } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { grid } from "../../../../ui/styles/gris"
import { flags } from "../../../../shared/Constaints/constaints"

export const Flags = () => {
    const flagItems = useMemo<Record<string, string>[]>(() => {
        return flags
    }, [])

    const itemIterator = (item: Record<string, string>) => {
        return <TouchableOpacity
            key={item.name}
            style={[styles.flagWrapper, {
                backgroundColor: item?.colorHash,
            }]}
        ></TouchableOpacity>
    }

    const renderFlatsList = flagItems
        ?.map(itemIterator)

    return (
        <View style={[grid.row, grid.alignCenter, grid.gap_md]}>
            {renderFlatsList}
        </View>
    )
}

const styles = StyleSheet.create({
    flagWrapper: {
        width: 24,
        height: 24,

        borderRadius: 100
    }
})