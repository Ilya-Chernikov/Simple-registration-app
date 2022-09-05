import {userActions} from "../userSclice";
import {$api} from "../../../../http";

export const Logout = ()=>(dispatch, getState) => {
    $api.post('/logout').then((res)=>{
        console.log("Logout");
        dispatch(userActions.clear());
        localStorage.removeItem('token');
    }).catch((err)=>{
        console.log(err);
    });
}