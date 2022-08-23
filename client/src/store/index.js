import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./User/userSclice";
import {usersListReducer} from "./UsersList/usersListSlice";
import {selectUserModule} from "./User/selectors";
import {selectUsersListModule} from "./UsersList/selectors";
const rootReducer = (state = {}, action = {}) => ({
    user: userReducer(selectUserModule(state), action),
    usersList: usersListReducer(selectUsersListModule(state), action)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
});


