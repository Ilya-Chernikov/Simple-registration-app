import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./Entities/User/userSclice";
import {usersListReducer} from "./Entities/UsersList/usersListSlice";
import {selectUserModule} from "./Entities/User/selectors";
import {selectUsersListModule} from "./Entities/UsersList/selectors";
import {entitiesReducer} from "./Entities/reducer";
import {selectEntitiesModule} from "./Entities/selectors";
import {uiReducer} from "./UI/reducer";
import {selectUiModule} from "./UI/selectors";
const rootReducer = (state = {}, action = {}) => ({
 entities:entitiesReducer(selectEntitiesModule(state), action),
 ui: uiReducer(selectUiModule(state), action)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
});


