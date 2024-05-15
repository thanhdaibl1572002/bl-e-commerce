import { createSlice, PayloadAction } from '@/redux/index'

export type Theme = 'violet' | 'blue' | 'green'

interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: 'violet'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload
        },
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer