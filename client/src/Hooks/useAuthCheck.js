import {useSelector} from "react-redux";
import {selectUserModule} from "../store/User/selectors";

export const useAuthCheck = () => {
  // const curUser = useSelector(state=>selectUserModule(state));
  // return !!curUser.userData;
  return !!localStorage.getItem('token')
}