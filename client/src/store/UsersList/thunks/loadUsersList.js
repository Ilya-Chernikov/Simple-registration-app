import {usersListActions} from "../usersListSlice";
import {$api} from "../../../http";

export const loadUsersList = ()=>(dispatch, getState) => {
    $api.get('/users')
        .then((response)=>{
            console.log("DONE", response);
            if(response.status === 200){
                dispatch(usersListActions.addUsers(response.data));
            }

        })
        .catch((error)=>{
            console.log(error);
        })


}