import styles from "./styles.module.css";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {deleteUserById} from "../../store/Entities/UsersList/thunks/deleteUserById";

export const Users = ({usersList}) => {
  const dispatch = useDispatch();


  if(!usersList?.length) return null;
  console.log("USERS-list");
  return (
      <div className={styles.userListContainer}>
          <button>Удалить всех</button>
          {usersList.map(user=>{
              return (
                  <div className={styles.user} key={user._id}>
                      <span>{user.email}</span>
                      <button data-id={user._id} onClick={(e)=>{
                         dispatch(deleteUserById(e.target.dataset.id));
                      }}>Удалить пользователя</button>
                  </div>
              )
          })}
      </div>
  )
}