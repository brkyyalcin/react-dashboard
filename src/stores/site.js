import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
    name: 'site',
    initialState: {
        dark: false,
        language: 'tr',
        toogleBtn:false
    },
    reducers: {
        setDarkMode: state => {
            state.dark = !state.dark
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setToogleBtn: (state,action) => {
            state.toogleBtn = !state.toogleBtn
        }
    }
})

export const { setDarkMode, setLanguage, setToogleBtn } = site.actions

export default site.reducer