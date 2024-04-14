import { createSlice, PayloadAction } from '@/redux/index'

export interface Currency {
    locales: string
    code: string
}

interface CurrencyState {
    currency: Currency
}

const initialState: CurrencyState = {
    currency: {
        locales: 'vi-VN',
        code: 'VND',
    }
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