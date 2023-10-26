import {combineReducers, configureStore} from "@reduxjs/toolkit";
 import {AuthReducer} from "../slices/auth.slice";

const rootReducer = combineReducers({
    AuthReducer
})



const setupStore = () => configureStore({
    reducer:rootReducer
})


export {
    setupStore
}

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppDispatch,
    AppStore
}
