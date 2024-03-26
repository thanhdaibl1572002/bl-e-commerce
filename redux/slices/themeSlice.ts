import { createSlice, PayloadAction } from '@/redux/index'

type Theme = 'theme__light' | 'theme__dark'

interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: 'theme__light'
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