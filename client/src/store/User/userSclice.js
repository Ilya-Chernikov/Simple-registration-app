import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:null
}

const userSclice = createSlice({
    name:"user",
    initialState,
    reducers: {
        add: (state, action) => {
            state.userData = action.payload.user;
        },
        clear: (state, action) => {
            return initialState;
        }
    }
});

export const userActions = userSclice.actions;
export const userReducer = userSclice.reducer;