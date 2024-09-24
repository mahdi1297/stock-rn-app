// import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface FlagManagerFactory {
    operate: (symbolName: string, color?: string) => void;
}

class RemoveFlag implements FlagManagerFactory {
    async operate(symbolName: string) {
        await AsyncStorage.removeItem(symbolName);
    }
}

class AddFlag implements FlagManagerFactory {
    async operate(symbolName: string, color: string) {
        await AsyncStorage.setItem(symbolName, color);
    }
}

export type FlagOrder = 'add' | 'remove'
export type FlagManagerClientProps = {
    order: FlagOrder,
}

export function flagManagerClient({ order }: FlagManagerClientProps) {
    switch (order) {
        case 'add':
            return new AddFlag();
        case 'remove':
            return new RemoveFlag();
        default:
            break;
    }
}