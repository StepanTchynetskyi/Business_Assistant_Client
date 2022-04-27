import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState: {user:sessionStorage.getItem("user")},
    reducers:{
        login(state){
            state.user = true
            sessionStorage.setItem("user", state.user)
        },
        logout(state){
            state.user = false
            sessionStorage.removeItem("user")
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;