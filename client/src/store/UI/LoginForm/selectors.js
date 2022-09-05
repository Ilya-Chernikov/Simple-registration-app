import {selectUiModule} from "../selectors";

export const selectLoginFormModule = (state) => selectUiModule(state)?.loginForm;

export const selectLoginErrorStatus = (state) => selectLoginFormModule(state)?.emailError;

export const selectPasswordErrorStatus = (state) => selectLoginFormModule(state)?.passwordError;

export const selectPayloadData = (state) => {
    return {
        email:selectLoginFormModule(state)?.email,
        password:selectLoginFormModule(state)?.password
    }
}