import { configureStore } from "@reduxjs/toolkit";
import { homeService } from "../screens/home/home.service";
import { coinDetailService } from "../screens/CoinDetail/coinDetail.service";

const store = configureStore({
  reducer: {
    [homeService.reducerPath]: homeService.reducer,
    [coinDetailService.reducerPath]: coinDetailService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([
      homeService.middleware,
      coinDetailService.middleware
    ]),
});

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {};

export default store;
