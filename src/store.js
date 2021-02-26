import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './pages/main/mainSlice'

export default configureStore({
    reducer: {
        main: mainReducer
    }
})