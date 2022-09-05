import {userActions} from "../userSclice";
import {$api} from "../../../../http";
import {errorsStatus} from "../../../../SharedData/sharedData";
import {severityTypes, snackBarActions} from "../../../UI/SnackBar/SnackBarSlice";
import {loginFormActions} from "../../../UI/LoginForm/LoginFormSlice";
import {registerFormActions} from "../../../UI/RegisterForm/RegisterFormSlice";

export const Register = ({payload})=>(dispatch, getState) => {
    //Проверить есть ли уже инфа о логине и если что очистить стор и разлогиниться
    console.log(payload);
  $api.post('/registration', payload)
      .then((response)=>{
          console.log("DONE", response);
          dispatch(userActions.add(response.data));
          localStorage.setItem('token', response.data.accessToken);
          dispatch(registerFormActions.clear({}));
          dispatch(loginFormActions.clear({}));
      })
      .catch((error)=>{
          console.log(error);
          dispatch(snackBarActions.create({
              severity:severityTypes.error,
              message:error.response?.data?.message
          }));
          switch (error.response?.data?.status){
              case errorsStatus.alreadyExists:
                  dispatch(registerFormActions.handleErrors({emailError:true}));
                  break;
              case errorsStatus.validationPassword:
                  dispatch(registerFormActions.handleErrors({passwordError:true}));
                  break;
              case errorsStatus.validationEmail:
                  dispatch(registerFormActions.handleErrors({emailError:true}));
          }
      })

}