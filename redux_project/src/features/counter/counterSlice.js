import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}

const counterSlice=createSlice({ //A slice contains State,Reducers,Actions




    name:"counter",
    initialState:initialState,
    reducers:{
      increment(state){
        state.value++; //But Redux Toolkit uses Immer internally.Immer lets you write code that looks like you're mutating the state, but behind the scenes it creates a new immutable state.
      },
      decrement(state){
        state.value--;
      },
      reset(state){
        state.value=0;
      } 

    }
});

export const{increment,decrement,reset}=counterSlice.actions;//This creates action functions. so you can call increment(),decrement(),reset()
export default counterSlice.reducer;//The reducer is exported to the store.