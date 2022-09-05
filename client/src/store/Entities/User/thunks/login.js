import {userActions} from "../userSclice";
import {$api} from "../../../../http";
import {loginFormActions} from "../../../UI/LoginForm/LoginFormSlice";
import {severityTypes, snackBarActions} from "../../../UI/SnackBar/SnackBarSlice";
import {loadUsersList} from "../../UsersList/thunks/loadUsersList";
import {errorsStatus} from "../../../../SharedData/sharedData";
import {registerFormActions} from "../../../UI/RegisterForm/RegisterFormSlice";


export const Login = ({payload})=>(dispatch, getState) => {
    $api.post('/login', payload)
        .then((response)=>{
            console.log("DONE", response);
            dispatch(userActions.add(response.data));
            localStorage.setItem('token', response.data.accessToken);
            dispatch(loginFormActions.clear({}));
            dispatch(registerFormActions.clear({}));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(snackBarActions.create({
                severity:severityTypes.error,
                message:error.response?.data?.message
            }));

            switch (error.response?.data?.status){
                case errorsStatus.incorrectEmailOrPassword:
                    dispatch(loginFormActions.handleErrors({emailError:true, passwordError:true}));
                    break;
                case errorsStatus.incorrectPassword:
                    dispatch(loginFormActions.handleErrors({passwordError:true}));
                    break;
            }
        })

}