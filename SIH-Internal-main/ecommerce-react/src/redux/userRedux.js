import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isFetching: false,
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state)=>{
            state.isFetching = true
        },
        loginSuccess : (state,action)=>{
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false

        },
        loginFailure: (state,action)=>{
            state.error = action.payload
            state.isFetching = false
        }
    },
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions

export default userSlice.reducer