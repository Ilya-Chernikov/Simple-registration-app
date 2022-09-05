import {selectEntitiesModule} from "../selectors";

export const selectUserModule = (state) => selectEntitiesModule(state)?.user;

