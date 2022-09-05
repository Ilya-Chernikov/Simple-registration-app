import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    password:"",
    emailError:false,
    passwordError: false
}

const LoginFormSclice = createSlice({
    name:"loginForm",
    initialState,
    reducers: {
        add: (state, action) => {
            if(!!action.payload.email) state.email = action.payload.email;
            if(!!action.payload.password) state.password = action.payload.password;

        },
        clear: (state, action) => {
            return initialState;
        },
        handleErrors:(state, action)=>{
            if(action.payload.emailError !== undefined) state.emailError = action.payload.emailError;
            if(action.payload.passwordError !== undefined) state.passwordError = action.payload.passwordError;
        }
    }
});

export const loginFormActions = LoginFormSclice.actions;
export const loginFormReducer = LoginFormSclice.reducer;