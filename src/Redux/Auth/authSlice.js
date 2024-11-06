import { createSlice } from "@reduxjs/toolkit";





export const authSlice = createSlice({
    name: "authenticate",
    initialState: {
        isLoggedIn: JSON.parse(localStorage.getItem("token")) ? true : false,
        token: JSON.parse(localStorage.getItem("token")),
        userData: {},
        contest:[],

        
    },
    reducers: {
        userAccount: (state, actions) => {
            state.userData = actions.payload
                
            
        },
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            localStorage.removeItem("token")
            state.isLoggedIn = false
        },
    }
})

export const { login, logout,userAccount } = authSlice.actions
export default authSlice.reducer;