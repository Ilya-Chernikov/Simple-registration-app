import {userReducer} from "./User/userSclice";
import {usersListReducer} from "./UsersList/usersListSlice";

export const entitiesReducer = (state = {}, action) => ({
    user: userReducer(state.user, action),
    usersList: usersListReducer(state.usersList, action),
});
