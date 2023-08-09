
import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slice/isLoading'
import products from './slice/products'
import favorites from './slice/favorites'
export default configureStore({
    reducer: {
        isLoading,
        products,
        favorites
    }
})
