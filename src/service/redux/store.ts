import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import { productsApi } from '../features/products/ProductsApi'
import cartSlice from '../features/cartSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
            counter: counterSlice,
            cart:cartSlice
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productsApi.middleware,
        ]),
        devTools: process.env.NODE_ENV !== 'production',
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']