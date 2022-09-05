import { createSlice } from "@reduxjs/toolkit";

export const severityTypes ={
    error:"error",
    warning:"warning",
    info:"info",
    success:"success"
}

const initialState = {
    open:false,
    severity:severityTypes.info,
    message:""
}

const SnackBarSlice = createSlice({
    name:"snackBar",
    initialState,
    reducers: {
       create:(state, action)=>{
           state.open = true;
           state.severity = action.payload.severity || severityTypes.info;
           state.message = action.payload.message || "";
       },
        handleOpen:(state, action)=>{
            switch (action.payload.open){
                case true:
                    state.open = true;
                    break;
                default: return initialState;
            }
        }
    }
});

export const snackBarActions = SnackBarSlice.actions;
export const snackBarReducer = SnackBarSlice.reducer;
