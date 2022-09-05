import {selectUiModule} from "../selectors";

export const selectRegisterFormModule = (state) => selectUiModule(state)?.registerForm;

export const selectRegisterErrorStatus = (state) => selectRegisterFormModule(state)?.emailError;

export const selectPasswordErrorStatus = (state) => selectRegisterFormModule(state)?.passwordError;

export const selectPayloadData = (state) => {
    return {
        email:selectRegisterFormModule(state)?.email,
        password:selectRegisterFormModule(state)?.password
    }
}