import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
    name: 'site',
    initialState: {
        dark: false,
        language: 'tr',
        toogleBtn:false,
        isWhoDropText:'',
        isWhoDrop:false
    },
    reducers: {
        setDarkMode: state => {
            state.dark = !state.dark
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setToogleBtn: state=> {
            state.toogleBtn = !state.toogleBtn
        },
        setIsWhoDropText: (state, action) => {
            state.isWhoDropText = action.payload
        },
        setIsWhoDrop: (state, action)=> {
            state.isWhoDrop = action.payload
        }
    }
})

export const { setDarkMode, setLanguage, setToogleBtn,setIsWhoDropText,setIsWhoDrop } = site.actions

export default site.reducer