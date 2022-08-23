import {userActions} from "../userSclice";
import {$api} from "../../../http";

export const Register = ({payload})=>(dispatch, getState) => {
    //Проверить есть ли уже инфа о логине и если что очистить стор и разлогиниться
    console.log(payload);
  $api.post('/registration', payload)
      .then((response)=>{
          console.log("DONE", response);
          dispatch(userActions.add(response.data));
          localStorage.setItem('token', response.data.accessToken);
      })
      .catch((error)=>{
          console.log(error);
      })

}