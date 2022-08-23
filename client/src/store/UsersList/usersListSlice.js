import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities:{},
    ids:[]
}

const usersListSclice = createSlice({
    name:"usersList",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            console.log("usersListSclice_ACTION_PAYLOAD",action.payload);
            state.entities=action?.payload?.users.reduce((acc, user)=>{
                acc[user._id]=user;
                return acc;
            },{});
            state.ids = action?.payload?.users.map(user=>user._id);
        },
        clear: (state, action) => {
            return initialState;
        }
    }
});

export const usersListActions = usersListSclice.actions;
export const usersListReducer = usersListSclice.reducer;