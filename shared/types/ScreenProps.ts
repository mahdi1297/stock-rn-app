export interface ScreenProps {
    navigation:{
        canGoBack: () => boolean;
        getId: () => string
        getParent: () => string
        push: () => void
        popToTop: () => void
        goBack: () => void
        navigate: (...args: any) => void
    }, 
    route:{
        key: string;
        name: string;
        params: any;
        path: any
    }
}