import {configureStore} from "@reduxjs/toolkit"
import postsSlice from "./features/content/contentSlice"

// makeStore, that we can use to create a store instance per-request
export const makeStore =()=>{
    return configureStore({
        reducer:{
            posts: postsSlice
        }
    })
}

// infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch =  AppStore['dispatch'] 



