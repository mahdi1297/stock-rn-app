import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import Animated, { Extrapolate } from "react-native-reanimated";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";

export const BottomSheetBackdrop = ({ animatedIndex, style, handleCloseModalPress }:
    BottomSheetBackdropProps & {
        handleCloseModalPress: () => void
    }) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP
        ),
    }));

    // styles
    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: "#0000004d",
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle}>
        <TouchableOpacity
            onPress={handleCloseModalPress}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
            }}
        >
        </TouchableOpacity>
    </Animated.View>;
};
