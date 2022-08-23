import {userActions} from "../userSclice";
import {$api} from "../../../http";

export const Login = ({payload})=>(dispatch, getState) => {
    $api.post('/login', payload)
        .then((response)=>{
            console.log("DONE", response);
            dispatch(userActions.add(response.data));
            localStorage.setItem('token', response.data.accessToken);
        })
        .catch((error)=>{
            console.log(error);
        })

}