import {
    FC,
    ReactNode,
    useCallback,
    useMemo,
    useRef,
} from "react";
import {
    BottomSheetModal,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop } from "../components/BottomSheetBackdrop";


type Props = {
    children: ReactNode;
    snapPoint?: string[];
    onClose?: () => void;
}

export type UseBottomSheet = any

/**
 * @description THis is a hook which indicates a bottom sheet
 * @param {children} children component which should be open via bottom sheet
 
 * @returns bottomSheetComponent rendered open bottom sheet component
 * @returns handlePresentModalPress a function which opens bottom sheet
 * @returns handleCloseModalPress a function which closes bottom sheet
 * @returns bottomSheetModalRef  bottom sheet ref

 */
export const useOpenBottomSheet: FC<Props> = ({ children, snapPoint, onClose }: { children: ReactNode, snapPoint?: string[], onClose?: () => void }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => snapPoint || ['25%', '50%'], [snapPoint]);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            onClose && onClose()
        }
    }, []);

    const bottomSheetComponent = useMemo(() => {
        return <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={(props) =>
                <BottomSheetBackdrop
                    {...props}
                    handleCloseModalPress={handleCloseModalPress}
                />
            }
            onChange={handleSheetChanges}
        >
            <BottomSheetView style={{
                flex: 1,
            }}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    }, [bottomSheetModalRef.current, snapPoints, children])

    return {
        bottomSheetComponent,
        handlePresentModalPress,
        handleCloseModalPress,
        bottomSheetModalRef,
    } as UseBottomSheet
}
