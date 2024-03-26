import { createSlice, PayloadAction } from '@/redux/index'

type Theme = 'theme__light' | 'theme__dark'

interface ThemeState {
    value: Theme
}

const initialState: ThemeState = {
    value: 'theme__light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.value = action.payload
        },
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer