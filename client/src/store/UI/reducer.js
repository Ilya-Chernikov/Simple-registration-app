import {loginFormReducer} from "./LoginForm/LoginFormSlice";
import {snackBarReducer} from "./SnackBar/SnackBarSlice";
import {registerFormReducer} from "./RegisterForm/RegisterFormSlice";

export const uiReducer = (state = {}, action) => ({
    loginForm: loginFormReducer(state.loginForm, action),
    registerForm:registerFormReducer(state.registerForm, action),
    snackBar: snackBarReducer(state.snackBar, action)
});
