import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    number: 0
  },
  reducers:{
    increase(state){
      state.number += 1
    },
    decrease(state){
      state.number -= 1
    },
    increaseByMount(state,action){
      state.number += action.payload
      //console.log(action.payload);
    }

  }
})

export const {increase,decrease,increaseByMount} = counterSlice.actions

export default counterSlice.reducer;