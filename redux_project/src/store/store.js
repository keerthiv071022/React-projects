import { configureStore } from "@reduxjs/toolkit";//configureStore() creates the Redux store.

import counterReducer from "../features/counter/counterSlice"

export const store=configureStore({
reducer:{
    counter:counterReducer,
}

})