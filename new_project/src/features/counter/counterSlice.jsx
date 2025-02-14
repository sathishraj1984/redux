import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'countertest',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

//action creators
export const { increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;