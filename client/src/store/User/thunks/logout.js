import {userActions} from "../userSclice";
import {$api} from "../../../http";

export const Logout = ()=>(dispatch, getState) => {
    dispatch(userActions.clear());
    localStorage.removeItem('token');
}