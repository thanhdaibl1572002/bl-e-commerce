import { createSlice, PayloadAction } from '@/redux/index'

export type Currency = 'VND' | 'USD' | 'CNY'

interface CurrencyState {
    currency: Currency
}

const initialState: CurrencyState = {
    currency: 'VND'
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<Currency>) {
            state.currency = action.payload
        },
    }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer