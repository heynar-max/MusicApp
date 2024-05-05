import { configureStore } from '@reduxjs/toolkit'
import playSlice from './play/playSlice'

export const store = configureStore({
    reducer: {
        play: playSlice,
    },
})