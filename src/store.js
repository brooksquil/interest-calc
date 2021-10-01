import { configureStore } from '@reduxjs/toolkit'

import Calculator from './calculator'

const store = configureStore({
    Calculator,
})

export default store;