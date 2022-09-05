import {$api} from "../../../../http";
import {loadUsersList} from "./loadUsersList";

export const deleteUserById = (id) => (dispatch, getState) => {
    if(!id){
        console.log("NO ID");
        return;
    }
    console.log("sending request, id: ", id);
    $api.get(`/deleteUserById?id=${id}`)
        .then((response)=>{
            console.log("DONE", response);
            if(response.status === 200){
                dispatch(loadUsersList());
            }

        })
        .catch((error)=>{
            console.log(error);
        })
}