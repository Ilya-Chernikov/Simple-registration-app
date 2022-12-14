import {useDispatch, useSelector} from "react-redux";
import {loadUsersList} from "../../store/Entities/UsersList/thunks/loadUsersList";
import {Users} from "../../Components/Users/Users";
import {selectAllUsers, selectUsersListModule} from "../../store/Entities/UsersList/selectors";
import {useEffect} from "react";

export const UsersContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadUsersList());
    }, []);
    const usersList = useSelector((state)=>selectAllUsers(state));
    console.log("render UserContainer", usersList);

    return <Users usersList={usersList}/>
}
