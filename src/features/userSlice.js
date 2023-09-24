import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null;
    isLoading: true;
    type:null;
}

export default userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state,action)=>{
            state.user=action.payload,
            state.isLoading = false,
            state.type=action.payload
        },

        logoutUser: (state,action)=>{
            state.user = null,
            state.type = null,

        },
        setLoading : (state,action)=>{
            state.isLoading = action.payload,
        }
    }
})


export const (loginUser,logoutUser,setLoading) = userSlice.actions;
