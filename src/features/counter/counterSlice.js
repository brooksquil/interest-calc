import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
    initialState: {
    count: 0,
    principal: 0,
    rate: 10,
    years: 0,
    calculated: 0
  },
  reducers: {
    setcalculator: (state, action) => {
    console.log(action)
    state.calculator = action.payload;
    },
  },
});

export const { setcalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;