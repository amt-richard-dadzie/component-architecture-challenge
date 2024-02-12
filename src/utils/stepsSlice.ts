import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step: "Step_1"
}

const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        setStep: (state, actions) => {
            state.step = actions.payload
        }
    }
})

export const {setStep} = stepsSlice.actions
export default stepsSlice.reducer;