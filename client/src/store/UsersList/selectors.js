export const selectUsersListModule = (state) => state.usersList;
export const selectUsersEntities = (state) => {
  return selectUsersListModule(state).entities;
}
export const selectUsersIds = (state) => {
  return selectUsersListModule(state).ids;
}

export const selectAllUsers = (state) => {
  const ids = selectUsersIds(state);
  const entities = selectUsersEntities(state);

  return ids.map(id=>entities[id]);
}

